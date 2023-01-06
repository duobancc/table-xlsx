import {DataIndex} from '../interface';

import {sameType} from './base';

function toArray<T>(arr: T | readonly T[]): T[] {
  if (arr === undefined || arr === null) {
    return [];
  }
  return (Array.isArray(arr) ? arr : [arr]) as T[];
}

/**
 * 通过path获取值
 */
export const getPathValue = (record: any, path: DataIndex) : string|number => {
  // Skip if path is empty
  if (!path && typeof path !== 'number') {
    return '';
  }
  const pathList = toArray(path);
  let current = record;
  for (let i = 0; i < pathList.length; i += 1) {
    if (!current) {
      return '';
    }
    const prop = pathList[i];
    current = current[prop];
  }
  return current;
};

/**
 * 获取render值
 */
export const getRenderValue = (renderResult:any) => {
  const values:string[] = [];
  const dealChildren = (child:any) => {
    if (sameType(child, 'String') || sameType(child, 'Number')) {
      values.push(child);
    }
    if (sameType(child, 'Object')) {
      const {children} = child.props;
      if (sameType(children, 'Object')) { // 兼容column render 存在多层嵌套dom情况
        dealChildren(children)
      }
      if (sameType(children, 'String') || sameType(children, 'Number')) {
        values.push(children);
      }
      if(sameType(children, 'Array')) {
        children.forEach((_child:any) => {
          dealChildren(_child);
        });
      }
    }
  };
  if (renderResult.children) {
    dealChildren(renderResult.children);
  } else {
    dealChildren(renderResult);
  }
  return values.join('');
};
