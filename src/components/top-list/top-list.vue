<template>
    <transition name="slide">
        <music-list :rank="rank" :title="title" :bg-image="bgImage" :songs="songs"></music-list>
    </transition>
</template>

<script type="text/ecmascript-6">
    import MusicList from 'components/music-list/music-list';
    import {mapGetters} from 'vuex';
    import {getMusicList} from 'api/rank';
    import {ERR_OK} from 'api/config';
    import {createSong} from 'common/js/song';

    export default {
        props: {},
        data () {
            return {
                songs: [],
                rank: true
            };
        },
        computed: {
            title() {
                return this.topList.topTitle;
            },
            bgImage() {
                if (this.songs.length) {
                    return this.songs[0].image;
                }
                return '';
            },
            ...mapGetters([
                'topList'
            ])
        },
        created () {
            if (!this.topList.id) {
                this.$router.push('/rank');
                return;
            }
            this._getMusicList();
        },
        methods: {
            _getMusicList() {
                getMusicList(this.topList.id).then((res) => {
                    if (res.code === ERR_OK) {
                        console.log(res);
                        this.songs = this._normalizeSonges(res['songlist']);
                    }
                });
            },
            _normalizeSonges(list) {
                let ret = [];
                list.forEach((item) => {
                    const musicData = item.data;
                    if (musicData.songid && musicData.albummid) {
                        ret.push(createSong(musicData));
                    }
                });
                return ret;
            }
        },
        mounted() {

        },
        components: {
            MusicList
        }
    };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .slide-enter-active, .slide-leave-active
        transition: all 0.3s

    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)
</style>