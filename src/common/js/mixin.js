import {mapGetters, mapMutations, mapActions} from 'vuex';
import {shuffle} from 'common/js/util';
import {playMode} from 'common/js/config';

export const playlistMixin = {
    computed: {
        ...mapGetters([
            'playList'
        ])
    },
    mounted() {
        this.handlePlaylist(this.playList);
    },
    activated() {
        this.handlePlaylist(this.playList);
    },
    watch: {
        playList(newVal) {
            this.handlePlaylist(newVal);
        }
    },
    methods: {
        handlePlaylist() {
            throw new Error('component must implement handlePlaylist method');
        }
    }
};

export const playerList = {
    computed: {
        iconMode() {
            return this.mode === playMode.sequence ? 'icon-sequence' : this.mode === playMode.loop ? 'icon-loop' : 'icon-random';
        },
        ...mapGetters([
            'playList',
            'currentSong',
            'mode',
            'sequenceList',
            'favoriteList'
        ])
    },
    methods: {
        ...mapMutations({
            setPlayingState: 'SET_PLAYING_STATE',
            setCurrentIndex: 'SET_CURRENT_INDEX',
            setPlayMode: 'SET_PLAY_MODE',
            setPlayList: 'SET_PLAYLIST'
        }),
        ...mapActions([
            'saveFavoriteList',
            'deleteFavoriteList'
        ]),
        toggleFavorite(song) {
            if (this.isFavorite(song)) {
                this.deleteFavoriteList(song);
            } else {
                this.saveFavoriteList(song);
            }
        },
        getFavoriteItem(song) {
            if (this.isFavorite(song)) {
                return 'icon-favorite';
            } else {
                return 'icon-not-favorite';
            }
        },
        isFavorite(song) {
            const index = this.favoriteList.findIndex((item) => {
                return item.id === song.id;
            });
            return index > -1;
        },
        resetCurrentIndex(list) {
            let index = list.findIndex((item) => {
                return item.id === this.currentSong.id;
            });
            this.setCurrentIndex(index);
        },
        changeMode() {
            const mode = (this.mode + 1) % 3;
            this.setPlayMode(mode);
            let list = null;
            if (mode === playMode.random) {
                list = shuffle(this.sequenceList);
            } else {
                list = this.sequenceList;
            }
            this.resetCurrentIndex(list);
            this.setPlayList(list);
        }
    }
};

export const searchMixin = {
    data () {
        return {
            query: '',
            refreshDelay: 100
        };
    },
    computed: {
        ...mapGetters([
            'searchHistory'
        ])
    },
    methods: {
        addQuery(query) {
            this.$refs.searchBox.setQuery(query);
        },
        onChangeQuery(query) {
            this.query = query;
        },
        blurInput() {
            this.$refs.searchBox.blur();
        },
        searchSave() {
            this.saveSearchHistory(this.query);
        },
        ...mapActions([
            'saveSearchHistory',
            'deleteSearchHistory'
        ])
    }
};