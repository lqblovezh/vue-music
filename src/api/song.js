import {commonParams} from './config';
import axios from 'axios';

export function getLyric(mid) {
    const url = '/api/lyric';
    const data = Object.assign({}, commonParams, {
        hostUin: 0,
        platform: 'yqq',
        needNewCode: 0,
        songmid: mid,
        format: 'json'
    });
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data);
    });
}
