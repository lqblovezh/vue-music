<template>
    <transition name="slide">
        <music-list :bg-image="bgImage" :songs="songs" :title="title"></music-list>
    </transition>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex';
    import musicList from 'components/music-list/music-list';
    import {getSingerDetail, getMusic} from 'api/singer';
    import {ERR_OK} from 'api/config.js';
    import {createSong} from 'common/js/song';

    export default {
        props: {},
        data () {
            return {
                songs: []
            };
        },
        computed: {
            title() {
                return this.singer.name;
            },
            bgImage() {
                return this.singer.avatar;
            },
            ...mapGetters([
                'singer'
            ])
        },
        created () {
            this._getDetail();
        },
        methods: {
            _getDetail() {
                if (!this.singer.id) {
                    this.$router.push('/singer');
                    return;
                }
                getSingerDetail(this.singer.id).then((res) => {
                    if (res.code === ERR_OK) {
                        this.songs = this._normalizeSonges(res.data.list);
                    }
                });
            },
            _normalizeSonges(list) {
                let ret = [];
                list.forEach((item) => {
                    let {musicData} = item;
                    getMusic(musicData.songmid).then(res => {
                        if (res.code === ERR_OK) {
                            const svkey = res.data.items;
                            const songVkey = svkey[0].vkey;
                            const newSong = createSong(musicData, songVkey);
                            ret.push(newSong);
                        }
                        // if (musicData.songid && musicData.albummid) {
                        //     ret.push(createSong(musicData));
                        // }
                    });
                });
                return ret;
            }
        },
        mounted() {

        },
        components: {
            musicList
        }
    };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .slide-enter-active, .slide-leave-active
        transition: all 0.3s

    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)
</style>