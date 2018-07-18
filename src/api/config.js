export default {
    api: '/api/',
    timeout: 300000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
    },
    home: { type: 'get', url: 'home' },
    login: { type: 'post', url: 'user/dologin' },
    userInfo: { type: 'get', url: 'user/userInfo' },
    /********** 基本信息维护 **********/
    basicDictionary: { type: 'get', url: 'basic/dictionary' },  // 数据字典
    /********** 产品管理 **********/
    productList: { type: 'get', url: 'product/list' },  // 产品列表
    productChangeStatus: { type: 'post', url: 'product/changeStatus' },  // 产品状态修改
    productDetail: { type: 'get', url: 'product/detail' },  // 产品详情
    productUpdate: { type: 'post', url: 'product/update' },  // 更新产品
    productAdd: { type: 'post', url: 'product/add' },  // 添加产品
    basicProductSideListAll: { type: 'get', url: 'basic/productSideListAll' }, // 获取产品方
    /********** 用户管理 **********/
    salesmanList: { type: 'get', url: 'salesman/list' },  // 业务员列表
    salesmanInitPassowrd: { type: 'post', url: 'salesman/initpassword' },  // 初始化密码
    salesmanConfirmadd: { type: 'post', url: 'salesman/confirmadd' },  // 新增用户
    salesmanConfirmupdate: { type: 'post', url: 'salesman/comfirmupdate' },  // 修改用户
    salesmanBaseinfo: { type: 'get', url: 'salesman/baseinfo' },  // 业务员基本信息
    salesmanCancelchannel: { type: 'post', url: 'salesman/cancelchannel' },  // 取消渠道关系
    salesmanConfirmchannelupdate: { type: 'post', url: 'salesman/confirmchannelupdate' },  // 更新渠道关系
    salesmanGetloanapplications: { type: 'get', url: 'salesman/getloanapplications' },  // 业务员进件记录
    salesmanCards: { type: 'get', url: 'salesman/cards' },  // 业务员银行卡列表
    /********** 运营管理 **********/
    basicChannelList: { type: 'get', url: 'basic/channelList' },  // 渠道列表
    addChannel: { type: 'post', url: 'basic/channelAdd' }, //新增渠道
    modifyChannel: { type: 'post', url: 'basic/channelUpdate' },
    deleteChannel: { type: 'post', url: 'basic/channelDelete' },
    basicProductSideList: { type: 'get', url: 'basic/productSideList' },  // 产品方列表
    bankList: { type: 'get', url: 'basic/bankList' }, //银行列表
    addBank: { type: 'post', url: 'basic/bankAdd' },  //新增银行
    modifyBank: { type: 'post', url: 'basic/bankUpdate' },  //修改银行
    changeBankStatus: { type: 'post', url: 'basic/bankChangeStatus' }, //修改银行状态
    tagList: { type: 'get', url: 'basic/productTagList' }, //标签列表
    addTag: { type: 'post', url: 'basic/productTagAdd' }, //新增标签
    modifyTag: { type: 'post', url: 'basic/productTagUpdate' }, //修改标签
    deleteTag: { type: 'post', url: 'basic/productTagDelete' }, //删除标签
    basicProductSideAdd: { type: 'post', url: 'basic/productSideAdd' },  // 新增产品方
    basicProductSideUpdate: { type: 'post', url: 'basic/productSideUpdate' },  // 更新产品方
    basicProductSideDelete: { type: 'delete', url: 'basic/productSideDelete' },  // 删除产品方
    /********** 工作台 ***********/
    backuplist: { type: 'get', url: 'task/backuplist' },
    initialDetailBefore: { type: 'get', url: 'task/initialDetailBefore' },
    initialDetailAfter: { type: 'get', url: 'task/initialDetailAfter' },
};
