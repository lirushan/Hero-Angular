import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from '../bean/hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} {
    const HEROES: Hero[] = [
      {id: 11, name: '张飞', skill: '山崩地裂'},
      {id: 12, name: '赵云', skill: '白鹤亮翅'},
      {id: 13, name: '黄宗', skill: '百步穿杨'},
      {id: 14, name: '关羽', skill: '狂龙出海'},
      {id: 15, name: '马超', skill: '野火燎原'},
      {id: 15, name: '司马懿', skill: '无想幻进'},
      {id: 15, name: '夏侯渊', skill: '横扫千军'},
      {id: 16, name: '貂蝉', skill: '飞燕回廊'}
    ];
    return {HEROES};
  }

}

