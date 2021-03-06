<template>
    <div class="search">
        <div class="search-box-wrapper">
            <search-box ref="searchBox" @query="onChangeQuery"></search-box>
        </div>
        <div ref="shortcutWrapper" class="shortcut-wrapper" v-show="!query">
            <scroll ref="shortcut" :refreshDelay="refreshDelay" class="shortcut" :data="shortcut">
                <div>
                    <div class="hot-key">
                        <h1 class="title">热门搜索</h1>
                        <ul>
                            <li @click="addQuery(item.k)" class="item" v-for="item in HotKey">
                                <span>{{item.k}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="search-history" v-show="searchHistory.length">
                        <h1 class="title">
                            <span class="text">搜索历史</span>
                            <span class="clear" @click="clearConfirm">
                                <i class="icon-clear"></i>
                            </span>
                        </h1>
                        <search-list @select="addQuery" @delete="deleteSearchHistory"
                                     :searches="searchHistory"></search-list>
                    </div>
                </div>
            </scroll>
        </div>
        <div class="search-result" ref="searchResult" v-show="query">
            <suggest @select="searchSave" ref="suggest" :query="query" @listScroll="blurInput"></suggest>
        </div>
        <confirm ref="confirm" @confirm="clearSearchHistory" text="是否清空所有搜索历史" confirmBtnText="清空"></confirm>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import searchBox from 'base/search-box/search-box';
    import searchList from 'base/search-list/search-list';
    import confirm from 'base/confirm/confirm';
    import scroll from 'base/scroll/scroll';
    import suggest from 'components/suggest/suggest';
    import {getHotKey} from 'api/search';
    import {ERR_OK} from 'api/config';
    import {playlistMixin, searchMixin} from 'common/js/mixin';
    import {mapActions, mapGetters} from 'vuex';

    export default {
        mixins: [playlistMixin, searchMixin],
        props: {},
        data () {
            return {
                HotKey: []
            };
        },
        computed: {
            shortcut() {
                return this.HotKey.concat(this.searchHistory);
            }
        },
        created () {
            this._getHotKey();
        },
        methods: {
            _getHotKey() {
                getHotKey().then((res) => {
                    if (res.code === ERR_OK) {
                        this.HotKey = res.data.hotkey.slice(0, 10);
                    }
                });
            },
            handlePlaylist(playList) {
                const bottom = playList.length > 0 ? '60px' : '';
                this.$refs.searchResult.style.bottom = bottom;
                this.$refs.shortcut.refresh();
                this.$refs.shortcutWrapper.style.bottom = bottom;
                this.$refs.suggest.refresh();
            },
            clearConfirm() {
                this.$refs.confirm.show();
            },
            ...mapActions([
                'clearSearchHistory'
            ])
        },
        watch: {
            query(newQuery) {
                setTimeout(() => {
                    this.$refs.shortcut.refresh();
                }, 20);
            }
        },
        components: {
            searchBox,
            suggest,
            searchList,
            confirm,
            scroll
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    @import "~common/stylus/mixin"

    .search
        .search-box-wrapper
            margin: 20px
        .shortcut-wrapper
            position: fixed
            top: 178px
            bottom: 0
            width: 100%
            .shortcut
                height: 100%
                overflow: hidden
                .hot-key
                    margin: 0 20px 20px 20px
                    .title
                        margin-bottom: 20px
                        font-size: $font-size-medium
                        color: $color-text-l
                    .item
                        display: inline-block
                        padding: 5px 10px
                        margin: 0 20px 10px 0
                        border-radius: 6px
                        background: $color-highlight-background
                        font-size: $font-size-medium
                        color: $color-text-d
                .search-history
                    position: relative
                    margin: 0 20px
                    .title
                        display: flex
                        align-items: center
                        height: 40px
                        font-size: $font-size-medium
                        color: $color-text-l
                        .text
                            flex: 1
                        .clear
                            extend-click()
                            .icon-clear
                                font-size: $font-size-medium
                                color: $color-text-d
        .search-result
            position: fixed
            width: 100%
            top: 178px
            bottom: 0
</style>