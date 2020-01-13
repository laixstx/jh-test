import styles from './index.css';
import {sort, recursiveMap, isObjectValEqual} from 'jh-utils'
import {ButtonComp, Result} from 'jh-lib'
import * as jhConfig from 'jh-lib/es/indexConfig'
// import * as aa from 'antd/es/index'
// import 'antd/dist/antd.css';
import React from "react";
// import forEach from 'lodash-es/forEach'
import map from 'lodash-es/map'
import isFunction from "lodash-es/isFunction";
// import {isFunction} from "lodash-es";

// forEach(bb, (bItem, bInd) => {
//     console.log(bInd, bItem);
// })


export default function () {
    let arr = [
        {
            name: '杨云',
            children: [
                {
                    name: '肖萨', children: [
                        {name: '张小娴'}
                    ]
                }
            ]
        },
        {name: '小松'}
    ];

    map(jhConfig, (Item, ind) => {
        console.log(isFunction(Item), isFunction(React.Component));
        // return <Item key={ind}>xxx</Item>
    })
    // console.info(isFunction(BtButton));

    // console.log(recurRemoveFields, recursiveFind)
    //
    //
    const newArr = recursiveMap(arr, (value, key, parentValue) => {
        return {...value, name: `${value.name}-xxx`}
    });
    //
    // console.log(newArr, isObjectValEqual);

    return (
        <div className={styles.normal}>
            {/*<BtLayout>*/}
            {/*<BtLayout.Header>Header</BtLayout.Header>*/}
            {/*<BtLayout.Content>Content</BtLayout.Content>*/}
            {/*<BtLayout.Footer>Footer</BtLayout.Footer>*/}
            {/*</BtLayout>*/}
            <h1>jh-lib</h1>
            <ButtonComp>xxx</ButtonComp>
            <Result type={"info"} title={'xxx'}/>
            {/*<Button>xxx</Button>*/}
            {
                // map(BtLib, (BItem, bInd) => {
                //     // console.log(bInd, BItem);
                //     // return <BItem key={bInd}>xxx</BItem>
                // })
            }
            {/*<h1>antd</h1>*/}
            {/*map(aa, (BItem, bInd) => {*/}
            {/*console.log(bInd, isFunction(BItem));*/}
            {/*return <p key={`${bInd}__`} >{bInd} {*/}
            {/*'Alert' === bInd && <BItem  message={'asdf'}/>*/}
            {/*}</p>*/}
            {/*// return <BItem key={bInd}>xxx</BItem>*/}
            {/*})*/}
            {/*}*/}
        </div>
    );
}
