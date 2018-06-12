import {playMode} from 'common/js/config';
import {lodeSearch, loadPlay, loadFavorite} from 'common/js/cache';

const state = {
    singer: {},
    playing: false, /* 播放 */
    fullScreen: false, /* 全屏 */
    playList: [], /* 播放列表 */
    sequenceList: [], /* 显示列表 */
    mode: playMode.sequence, /* 播放模式 */
    currentIndex: -1, /* 当前播放索引 */
    disc: {}, /* 推荐详情 */
    topList: {}, /* 排行榜列表 */
    searchHistory: lodeSearch(), /* 搜索历史 */
    playHistory: loadPlay(), /* 播放历史 */
    favoriteList: loadFavorite() /* 已收藏歌曲 */
};

export default state;
