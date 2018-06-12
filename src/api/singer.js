import jsonp from 'common/js/jsonp';
import { commonParams, options } from './config';
import axios from 'axios';
// import { promises } from 'fs';

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    platform: 'yqq',
    needNewCode: 0
  });
  return jsonp(url, data, options);
}

export function getSingerDetail(id) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg';
  const data = Object.assign({}, commonParams, {
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    singermid: id,
    order: 'listen',
    begin: 0,
    num: 30,
    songstatus: 1
  });
  return jsonp(url, data, options);
}

export function getMusic(songmid) {
  const url = '/api/music';
  const data = Object.assign({}, commonParams, {
    songmid: songmid,
    filename: `C400${songmid}.m4a`,
    guid: 1203863825,
    platform: 'yqq',
    loginUin: 0,
    hostUin: 0,
    inCharset: 'utf8',
    outCharset: 'utf-8',
    needNewCode: 0,
    cid: 205361747,
    uin: 0,
    format: 'json'
  });
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data);
    });
}
