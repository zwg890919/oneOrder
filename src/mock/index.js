import Mock from 'mockjs'

Mock.mock('/api/user/dologin', (req, res) => {
  return {
    success: true,
    datas: {
      token: '0c003250e5b64bc3b730cc7405d2bd5c'
    }
  }
})

Mock.mock('/api/user/userInfo', 'get', (config) => {
  return {
    success: true,
    datas: {
      roles: [
        {
          "childrens": [
            {
              "childrens": [
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100385,
                      "itemURL": "product/{productId}",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "productDetail",
                      "menuCreatedon": 1514960500000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10080,
                      "menuModifiedon": 1515399333000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*散标产品详情查询",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[0].childrens[0]"
                      },
                      "parentId": 100379,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100384,
                      "itemURL": "user/assets/detail/{subscribeId}",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514960456000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10092,
                      "menuModifiedon": 1514960520000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "认购详情",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[0].childrens[0]"
                      },
                      "parentId": 100379,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100383,
                      "itemURL": "product/subscribe/{productId}",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514960429000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10081,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "认购记录",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[0].childrens[0]"
                      },
                      "parentId": 100379,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100379,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1514960273000,
                  "menuHref": "app.product.scatteredProductInfo",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": null,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 2,
                  "menuVisibility": false,
                  "name": "散标产品详情",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[0]"
                  },
                  "parentId": 100263,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100382,
                      "itemURL": "user/assets/detail/{subscribeId}",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "buyRecordInfo",
                      "menuCreatedon": 1514960384000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10092,
                      "menuModifiedon": 1514960540000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "认购详情",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[0].childrens[1]"
                      },
                      "parentId": 100264,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100381,
                      "itemURL": "product/subscribe/{productId}",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "buyRecordModal",
                      "menuCreatedon": 1514960357000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10081,
                      "menuModifiedon": 1514960535000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "认购记录",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[0].childrens[1]"
                      },
                      "parentId": 100264,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100380,
                      "itemURL": "product/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514960320000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10079,
                      "menuModifiedon": 1515399343000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*产品列表查询",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[0].childrens[1]"
                      },
                      "parentId": 100264,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100264,
                  "itemURL": "auth/itempck/user",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1511939256000,
                  "menuHref": "app.product.productList",
                  "menuIconclass": "",
                  "menuItemId": 10072,
                  "menuModifiedon": 1514960291000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "产品列表",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[0]"
                  },
                  "parentId": 100263,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                }
              ],
              "id": 100263,
              "itemURL": "",
              "leaf": true,
              "level": 2,
              "menuAuthLevel": 3,
              "menuCode": "",
              "menuCreatedon": 1511938404000,
              "menuHref": "app.product",
              "menuIconclass": "ios-box",
              "menuItemId": 2,
              "menuModifiedon": 1514451559000,
              "menuSerialNo": 1,
              "menuStatus": true,
              "menuType": 1,
              "menuVisibility": false,
              "name": "售卖产品",
              "parent": {
                "$ref": "$.datas.result.childrens[0]"
              },
              "parentId": 100198,
              "root": {
                "$ref": "$.datas.result"
              },
              "isSingle": 1
            },
            {
              "childrens": [
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100532,
                      "itemURL": "automaticlazy/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1516284882000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10259,
                      "menuModifiedon": 1517970647000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*懒人投资续投预约列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[1].childrens[0]"
                      },
                      "parentId": 100262,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100552,
                      "itemURL": "automaticlazy/originallazynum",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1517970682000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10260,
                      "menuModifiedon": null,
                      "menuSerialNo": 2,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "根据原始委托编号查询续投信息",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[1].childrens[0]"
                      },
                      "parentId": 100262,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100553,
                      "itemURL": "automaticlazy/status",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "cancleAutomatic",
                      "menuCreatedon": 1517970703000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10261,
                      "menuModifiedon": 1517970823000,
                      "menuSerialNo": 3,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "取消懒人续投",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[1].childrens[0]"
                      },
                      "parentId": 100262,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100554,
                      "itemURL": "automaticlazy",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "addAutomatic",
                      "menuCreatedon": 1517970723000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10262,
                      "menuModifiedon": 1517970843000,
                      "menuSerialNo": 4,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "新增续投预约信息",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[1].childrens[0]"
                      },
                      "parentId": 100262,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100262,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1511851134000,
                  "menuHref": "app.appointment.lazy",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": 1514960573000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "懒人投资续投预约",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[1]"
                  },
                  "parentId": 100259,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100386,
                      "itemURL": "personal/subscribe/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514960639000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10093,
                      "menuModifiedon": 1515399373000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*vip预约记录列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[1].childrens[1]"
                      },
                      "parentId": 100260,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100388,
                      "itemURL": "personal/subscribe/{personalId}",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "editAppoint",
                      "menuCreatedon": 1514960693000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10095,
                      "menuModifiedon": 1527130859000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "修改vip预约",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[1].childrens[1]"
                      },
                      "parentId": 100260,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100387,
                      "itemURL": "personal/subscribe",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "addAppoint",
                      "menuCreatedon": 1514960667000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10096,
                      "menuModifiedon": 1527130865000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "新增vip预约",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[1].childrens[1]"
                      },
                      "parentId": 100260,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100623,
                      "itemURL": "personal/subscribe/{personalId}",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "cancleAutomatic",
                      "menuCreatedon": 1527131135000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10095,
                      "menuModifiedon": 1527131180000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "取消vip预约",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[1].childrens[1]"
                      },
                      "parentId": 100260,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100260,
                  "itemURL": "auth/post/itempck",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1511850946000,
                  "menuHref": "app.appointment.vip",
                  "menuIconclass": "",
                  "menuItemId": 10078,
                  "menuModifiedon": 1511851681000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "VIP私人定制",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[1]"
                  },
                  "parentId": 100259,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                }
              ],
              "id": 100259,
              "itemURL": "",
              "leaf": true,
              "level": 2,
              "menuAuthLevel": 3,
              "menuCode": "",
              "menuCreatedon": 1511850927000,
              "menuHref": "",
              "menuIconclass": "clipboard",
              "menuItemId": 2,
              "menuModifiedon": 1511851018000,
              "menuSerialNo": 1,
              "menuStatus": true,
              "menuType": 1,
              "menuVisibility": false,
              "name": "预约管理",
              "parent": {
                "$ref": "$.datas.result.childrens[0]"
              },
              "parentId": 100198,
              "root": {
                "$ref": "$.datas.result"
              },
              "isSingle": 1
            },
            {
              "childrens": [
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100430,
                      "itemURL": "user",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "addUser",
                      "menuCreatedon": 1514964068000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10161,
                      "menuModifiedon": 1515399389000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*新增个人用户",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[0]"
                      },
                      "parentId": 100392,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100392,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1514960791000,
                  "menuHref": "app.user.addPerson",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": 1514984030000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 2,
                  "menuVisibility": false,
                  "name": "新建个人用户",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[2]"
                  },
                  "parentId": 100200,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100432,
                      "itemURL": "user",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "editUser",
                      "menuCreatedon": 1514964139000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10163,
                      "menuModifiedon": 1515399398000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*修改个人用户",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[1]"
                      },
                      "parentId": 100391,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100431,
                      "itemURL": "user",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514964123000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10162,
                      "menuModifiedon": 1515399394000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询个人用户信息",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[1]"
                      },
                      "parentId": 100391,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100391,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1514960777000,
                  "menuHref": "app.user.modifyPerson",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": 1514984038000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 2,
                  "menuVisibility": false,
                  "name": "修改个人用户",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[2]"
                  },
                  "parentId": 100200,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100433,
                      "itemURL": "company",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "addCompany",
                      "menuCreatedon": 1514964343000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10193,
                      "menuModifiedon": 1515399403000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*新建企业用户",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[2]"
                      },
                      "parentId": 100390,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100390,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1514960758000,
                  "menuHref": "app.user.addCompany",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": 1514964731000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 2,
                  "menuVisibility": false,
                  "name": "新增企业用户",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[2]"
                  },
                  "parentId": 100200,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100435,
                      "itemURL": "company",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "editCompany",
                      "menuCreatedon": 1514964397000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10195,
                      "menuModifiedon": 1515399406000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*修改企业用户",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[3]"
                      },
                      "parentId": 100389,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100434,
                      "itemURL": "company",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514964369000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10194,
                      "menuModifiedon": 1515399411000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询企业用户详细",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[3]"
                      },
                      "parentId": 100389,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100389,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1514960742000,
                  "menuHref": "app.user.modifyCompany",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": null,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 2,
                  "menuVisibility": false,
                  "name": "修改企业用户",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[2]"
                  },
                  "parentId": 100200,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100544,
                      "itemURL": "message/push",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "pushMsg",
                      "menuCreatedon": 1517573068000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10254,
                      "menuModifiedon": 1517573225000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "推送个人消息",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4]"
                      },
                      "parentId": 100201,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100543,
                      "itemURL": "user",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "addUserBtn",
                      "menuCreatedon": 1517570172000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10161,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "新增个人用户",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4]"
                      },
                      "parentId": 100201,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100478,
                      "itemURL": "user/treasure",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "grantTreasure",
                      "menuCreatedon": 1514971652000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10172,
                      "menuModifiedon": 1514990081000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "发放聚小宝",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4]"
                      },
                      "parentId": 100201,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100476,
                      "itemURL": "coupon",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "userGrantCoupon",
                      "menuCreatedon": 1514971503000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10179,
                      "menuModifiedon": 1514989194000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "发放优惠券",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4]"
                      },
                      "parentId": 100201,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100475,
                      "itemURL": "integral",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "userGrantIntegar",
                      "menuCreatedon": 1514971488000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10173,
                      "menuModifiedon": 1514989203000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "发放积分",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4]"
                      },
                      "parentId": 100201,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100470,
                      "itemURL": "user/export/execl",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "exportExcel",
                      "menuCreatedon": 1514971055000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10159,
                      "menuModifiedon": 1514989788000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 2,
                      "menuVisibility": false,
                      "name": "导出个人列表execl",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4]"
                      },
                      "parentId": 100201,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100469,
                      "itemURL": "user/export/count",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "exportExcelCount",
                      "menuCreatedon": 1514970334000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10160,
                      "menuModifiedon": 1517573992000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "查询导出个人列表execl条数",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4]"
                      },
                      "parentId": 100201,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100468,
                      "itemURL": "init/pwd",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "userResetPwd",
                      "menuCreatedon": 1514970286000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10171,
                      "menuModifiedon": 1514989226000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "初始化登录密码",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4]"
                      },
                      "parentId": 100201,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100467,
                      "itemURL": "sms/template",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "msgTemplate",
                      "menuCreatedon": 1514970216000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10145,
                      "menuModifiedon": 1514990887000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "获得消息模板",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4]"
                      },
                      "parentId": 100201,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [
                        {
                          "childrens": [],
                          "id": 100539,
                          "itemURL": "user/risk/questionnaire",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1517382569000,
                          "menuHref": "",
                          "menuIconclass": "",
                          "menuItemId": 10185,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 3,
                          "menuVisibility": false,
                          "name": "根据userId查询风险测评问卷",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [],
                          "id": 100471,
                          "itemURL": "user/info",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "userInfo",
                          "menuCreatedon": 1514971164000,
                          "menuHref": "0",
                          "menuIconclass": "",
                          "menuItemId": 10184,
                          "menuModifiedon": 1515399540000,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 3,
                          "menuVisibility": false,
                          "name": "*查询用户基本信息详情",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100460,
                              "itemURL": "login/record",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userLoginRecord",
                              "menuCreatedon": 1514969316000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10222,
                              "menuModifiedon": 1515399547000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*查询用户登录记录",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[2]"
                              },
                              "parentId": 100408,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100408,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961170000,
                          "menuHref": "app.user.personInfo.loginLog",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "登陆记录",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100459,
                              "itemURL": "user/invitations",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "inviteRecord",
                              "menuCreatedon": 1514969206000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10218,
                              "menuModifiedon": 1515399651000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*用户的邀请记录",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[3]"
                              },
                              "parentId": 100407,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100458,
                              "itemURL": "user/invitation/statistics",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "inviteTotal",
                              "menuCreatedon": 1514969157000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10219,
                              "menuModifiedon": 1515399661000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*邀请记录统计",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[3]"
                              },
                              "parentId": 100407,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100407,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961149000,
                          "menuHref": "app.user.personInfo.invite",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "邀请记录",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100457,
                              "itemURL": "user/exchange/record/{recordId}",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userExchangeApply",
                              "menuCreatedon": 1514968783000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10175,
                              "menuModifiedon": 1515119524000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "礼品兑换授理",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[4]"
                              },
                              "parentId": 100406,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100455,
                              "itemURL": "user/exchange/records/{userId}",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userExchangeList",
                              "menuCreatedon": 1514968641000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10174,
                              "menuModifiedon": 1515119647000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "用户兑换记录",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[4]"
                              },
                              "parentId": 100406,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100454,
                              "itemURL": "integral/list",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userIntegralList",
                              "menuCreatedon": 1514968580000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10178,
                              "menuModifiedon": 1515119704000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "用户详情（积分）",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[4]"
                              },
                              "parentId": 100406,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100406,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961134000,
                          "menuHref": "app.user.personInfo.integral",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "积分",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [],
                          "id": 100405,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961122000,
                          "menuHref": "app.user.personInfo.juxiaobao",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "聚小宝",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100453,
                              "itemURL": "coupon/list",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userCoupon",
                              "menuCreatedon": 1514968421000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10180,
                              "menuModifiedon": 1515399743000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*用户详情（优惠券）",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[6]"
                              },
                              "parentId": 100404,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100404,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961104000,
                          "menuHref": "app.user.personInfo.coupon",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "优惠券",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100451,
                              "itemURL": "user/bankcard/list",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userBankCard",
                              "menuCreatedon": 1514968190000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10183,
                              "menuModifiedon": 1515399756000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*用户详情（银行卡）",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[7]"
                              },
                              "parentId": 100403,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100583,
                              "itemURL": "card/four",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userUnBindCard",
                              "menuCreatedon": 1524229166000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10287,
                              "menuModifiedon": 1528889316000,
                              "menuSerialNo": 2,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "解绑银行卡",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[7]"
                              },
                              "parentId": 100403,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100584,
                              "itemURL": "card/bind/personal/first",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1524229265000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10288,
                              "menuModifiedon": null,
                              "menuSerialNo": 3,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "绑定银行卡获取验证码",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[7]"
                              },
                              "parentId": 100403,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100585,
                              "itemURL": "card/bind/personal/second",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userBindCard",
                              "menuCreatedon": 1524229298000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10289,
                              "menuModifiedon": 1528889301000,
                              "menuSerialNo": 4,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "绑定银行卡第二步",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[7]"
                              },
                              "parentId": 100403,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100403,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961091000,
                          "menuHref": "app.user.personInfo.bankCard",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "银行卡",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100450,
                              "itemURL": "dealing/list",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "companyDealList",
                              "menuCreatedon": 1514967819000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10200,
                              "menuModifiedon": 1515399799000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*查询用户交易记录",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[8]"
                              },
                              "parentId": 100402,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100449,
                              "itemURL": "user/card/info",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1514967762000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10170,
                              "menuModifiedon": 1515399820000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*用户卡信息摘要",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[8]"
                              },
                              "parentId": 100402,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100402,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961078000,
                          "menuHref": "app.user.personInfo.tradingRecord",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "交易记录",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100567,
                              "itemURL": "b2c/orderno",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1518579229000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10273,
                              "menuModifiedon": null,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "网银B2C订单查询",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[9]"
                              },
                              "parentId": 100401,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100566,
                              "itemURL": "baofoo/fastpay/orderno",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1518579186000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10272,
                              "menuModifiedon": null,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "宝付快捷订单查询",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[9]"
                              },
                              "parentId": 100401,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100448,
                              "itemURL": "user/balance/list",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userRemainAccountInfo",
                              "menuCreatedon": 1514967654000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10187,
                              "menuModifiedon": 1515400270000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*用户详情-余额账户",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[9]"
                              },
                              "parentId": 100401,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100447,
                              "itemURL": "user/balance/info",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userRemainAccountTable",
                              "menuCreatedon": 1514967602000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10186,
                              "menuModifiedon": 1515399839000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*用户余额账户摘要",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[9]"
                              },
                              "parentId": 100401,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100577,
                              "itemURL": "finance/balance/accounts",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "otherBalance",
                              "menuCreatedon": 1521438783000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10283,
                              "menuModifiedon": 1521465734000,
                              "menuSerialNo": 5,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "第三方余额明细",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[9]"
                              },
                              "parentId": 100401,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100579,
                              "itemURL": "finance/balance/recharge/status",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1521620442000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10284,
                              "menuModifiedon": null,
                              "menuSerialNo": 6,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "充值状态查询",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[9]"
                              },
                              "parentId": 100401,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100580,
                              "itemURL": "finance/balance/drawcash/status",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1521620462000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10285,
                              "menuModifiedon": null,
                              "menuSerialNo": 7,
                              "menuStatus": true,
                              "menuType": 1,
                              "menuVisibility": false,
                              "name": "提现状态查询",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[9]"
                              },
                              "parentId": 100401,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100591,
                              "itemURL": "balance/dayRechargeMoney",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "personRechargeMoney",
                              "menuCreatedon": 1525328138000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10293,
                              "menuModifiedon": null,
                              "menuSerialNo": 8,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "修改在途",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[9]"
                              },
                              "parentId": 100401,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100401,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961063000,
                          "menuHref": "app.user.personInfo.remainAccount",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "余额账户",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100446,
                              "itemURL": "user/wallet/list",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1514967508000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10182,
                              "menuModifiedon": 1515400298000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*用户详情（私房钱）",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[10]"
                              },
                              "parentId": 100400,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100445,
                              "itemURL": "user/card/info",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1514967433000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10170,
                              "menuModifiedon": 1515400303000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*用户卡信息摘要",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[10]"
                              },
                              "parentId": 100400,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100400,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961047000,
                          "menuHref": "app.user.personInfo.caseDough",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "私房钱",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100444,
                              "itemURL": "assignment/detail",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "transferApplyInfo",
                              "menuCreatedon": 1514967317000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10199,
                              "menuModifiedon": 1515400308000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*查询转让申请详情",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[11]"
                              },
                              "parentId": 100399,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100399,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961031000,
                          "menuHref": "app.user.personInfo.transferInfo",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "转让详情",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100443,
                              "itemURL": "assignment",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "transferApply",
                              "menuCreatedon": 1514967224000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10198,
                              "menuModifiedon": 1515400312000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*查询转让申请",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[12]"
                              },
                              "parentId": 100398,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100398,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961010000,
                          "menuHref": "app.user.personInfo.transferList",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "转让申请",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100536,
                              "itemURL": "user/agreement/{subscribeId}",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1516948231000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10188,
                              "menuModifiedon": null,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "委托协议内容",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[13]"
                              },
                              "parentId": 100397,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100442,
                              "itemURL": "user/assets/detail/{subscribeId}",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userAssetLazyDetail",
                              "menuCreatedon": 1514967063000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10167,
                              "menuModifiedon": 1515400525000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*委托产品资产明细基本",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[13]"
                              },
                              "parentId": 100397,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100441,
                              "itemURL": "user/subscribe/detail/{subscribeId}",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userAssetLazyDetail2",
                              "menuCreatedon": 1514966948000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10165,
                              "menuModifiedon": 1515400532000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*资产明细详情扩展",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[13]"
                              },
                              "parentId": 100397,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100440,
                              "itemURL": "product/repayment/{productId}",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "repaymentPlan",
                              "menuCreatedon": 1514966833000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10082,
                              "menuModifiedon": 1515034585000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "指定产品的回款计划",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[13]"
                              },
                              "parentId": 100397,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100397,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514960993000,
                          "menuHref": "app.user.personInfo.lazyDetail",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "委托认购详情",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100573,
                              "itemURL": "subscirbe/coupon/{subscribeId}",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "changeCoupon",
                              "menuCreatedon": 1519963181000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10279,
                              "menuModifiedon": 1519965999000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "更改优惠券",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[14]"
                              },
                              "parentId": 100396,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100538,
                              "itemURL": "user/contract/{contractId}",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1517364797000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10189,
                              "menuModifiedon": 1517364811000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "根据编码查询合同的内容",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[14]"
                              },
                              "parentId": 100396,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100439,
                              "itemURL": "user/subscribe/detail/{subscribeId}",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userAssetNormalDetail",
                              "menuCreatedon": 1514966581000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10165,
                              "menuModifiedon": 1515033193000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "查询资产明细详情扩展",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[14]"
                              },
                              "parentId": 100396,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100438,
                              "itemURL": "user/assets/detail/entrust",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userAssetLazy",
                              "menuCreatedon": 1514966305000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10166,
                              "menuModifiedon": 1515033509000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "查询委托产品资产明细",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[14]"
                              },
                              "parentId": 100396,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100437,
                              "itemURL": "user/assets/detail/dispersed",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userAssetNormal",
                              "menuCreatedon": 1514966110000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10164,
                              "menuModifiedon": 1515032396000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "查询散标资产明细",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[14]"
                              },
                              "parentId": 100396,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100574,
                              "itemURL": "subscirbe/coupon/{subscribeId}",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1519963206000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10278,
                              "menuModifiedon": 1522294638000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*查询优惠券信息",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[14]"
                              },
                              "parentId": 100396,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100396,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514960978000,
                          "menuHref": "app.user.personInfo.personAsset",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "资产明细",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100436,
                              "itemURL": "user/inviter",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userInvitor",
                              "menuCreatedon": 1514965375000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10220,
                              "menuModifiedon": 1519871488000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "修改邀请人",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[15]"
                              },
                              "parentId": 100395,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100395,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514960962000,
                          "menuHref": "app.user.personInfo.index",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "基础信息",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100626,
                              "itemURL": "lazyout/list",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userEntrust",
                              "menuCreatedon": 1529501093000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10302,
                              "menuModifiedon": 1529501435000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*委托退出申请列表",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9].childrens[16]"
                              },
                              "parentId": 100625,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100625,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1529500974000,
                          "menuHref": "app.user.personInfo.entrust",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": 1529501430000,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "委托退出申请",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4].childrens[9]"
                          },
                          "parentId": 100394,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        }
                      ],
                      "id": 100394,
                      "itemURL": "",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514960936000,
                      "menuHref": "app.user.personInfo",
                      "menuIconclass": "",
                      "menuItemId": 0,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 2,
                      "menuVisibility": false,
                      "name": "个人用户详细",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4]"
                      },
                      "parentId": 100201,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100377,
                      "itemURL": "user/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514864679000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10158,
                      "menuModifiedon": 1515399446000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询个人用户列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4]"
                      },
                      "parentId": 100201,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100589,
                      "itemURL": "user/status",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "userCancellationUser",
                      "menuCreatedon": 1524797629000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10292,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "注销用户",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4]"
                      },
                      "parentId": 100201,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100593,
                      "itemURL": "excel/template",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "userGrantCouponTemplate",
                      "menuCreatedon": 1526532719000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10295,
                      "menuModifiedon": null,
                      "menuSerialNo": 10,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "发放优惠券（批量）",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4]"
                      },
                      "parentId": 100201,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100594,
                      "itemURL": "excel/template",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "userGrantIntegarTemplate",
                      "menuCreatedon": 1526532753000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10295,
                      "menuModifiedon": null,
                      "menuSerialNo": 11,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "发放积分（批量）",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4]"
                      },
                      "parentId": 100201,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100595,
                      "itemURL": "excel/template",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "msgTemplateTemplate",
                      "menuCreatedon": 1526532784000,
                      "menuHref": "0",
                      "menuIconclass": "",
                      "menuItemId": 10295,
                      "menuModifiedon": null,
                      "menuSerialNo": 12,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "消息模板（批量）",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[4]"
                      },
                      "parentId": 100201,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100201,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1505875780000,
                  "menuHref": "app.user.person",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": 1514900967000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "个人用户",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[2]"
                  },
                  "parentId": 100200,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100474,
                      "itemURL": "integral",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "companyGrantIntegar",
                      "menuCreatedon": 1514971395000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10173,
                      "menuModifiedon": 1515132776000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "发放积分",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5]"
                      },
                      "parentId": 100202,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100473,
                      "itemURL": "coupon",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "companyGrantCoupon",
                      "menuCreatedon": 1514971353000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10179,
                      "menuModifiedon": 1515132796000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "发放优惠券",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5]"
                      },
                      "parentId": 100202,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100465,
                      "itemURL": "company/export/execl",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "companyExcel",
                      "menuCreatedon": 1514969978000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10191,
                      "menuModifiedon": 1515132738000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "导出企业用户列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5]"
                      },
                      "parentId": 100202,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100464,
                      "itemURL": "company/export/count",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "companyExcelCount",
                      "menuCreatedon": 1514969936000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10192,
                      "menuModifiedon": 1515132727000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "导出企业列表execl条数",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5]"
                      },
                      "parentId": 100202,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100463,
                      "itemURL": "company/audit",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "companyAudit",
                      "menuCreatedon": 1514969887000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10196,
                      "menuModifiedon": 1515132920000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "企业用户审核",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5]"
                      },
                      "parentId": 100202,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100462,
                      "itemURL": "company/init/pwd",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "companyResetPwd",
                      "menuCreatedon": 1514969852000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10205,
                      "menuModifiedon": 1515132842000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "初始化登录密码",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5]"
                      },
                      "parentId": 100202,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100461,
                      "itemURL": "company/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514969744000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10190,
                      "menuModifiedon": 1515399508000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询企业用户列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5]"
                      },
                      "parentId": 100202,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [
                        {
                          "childrens": [],
                          "id": 100472,
                          "itemURL": "company/detail",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "companyInfo",
                          "menuCreatedon": 1514971222000,
                          "menuHref": "",
                          "menuIconclass": "",
                          "menuItemId": 10204,
                          "menuModifiedon": 1515399457000,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 3,
                          "menuVisibility": false,
                          "name": "*查询企业用户详情",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7]"
                          },
                          "parentId": 100409,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100491,
                              "itemURL": "login/record",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "companyLoginRecord",
                              "menuCreatedon": 1514973099000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10222,
                              "menuModifiedon": 1515401011000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*查询用户登录记录",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[1]"
                              },
                              "parentId": 100419,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100419,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961432000,
                          "menuHref": "app.user.companyinfo.loginLog",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "登陆记录",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7]"
                          },
                          "parentId": 100409,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100490,
                              "itemURL": "user/invitations",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1514972977000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10218,
                              "menuModifiedon": 1515401017000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 1,
                              "menuVisibility": false,
                              "name": "*用户详情的邀请记录",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[2]"
                              },
                              "parentId": 100418,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100489,
                              "itemURL": "user/invitation/statistics",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1514972917000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10219,
                              "menuModifiedon": 1515401024000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*邀请记录统计",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[2]"
                              },
                              "parentId": 100418,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100418,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961417000,
                          "menuHref": "app.user.companyinfo.invite",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "邀请记录",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7]"
                          },
                          "parentId": 100409,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100488,
                              "itemURL": "user/operator/list",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1514972864000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10176,
                              "menuModifiedon": 1515401030000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*查询操作人列表",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[3]"
                              },
                              "parentId": 100417,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100487,
                              "itemURL": "integral/list",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1514972838000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10178,
                              "menuModifiedon": 1515401036000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*用户详情（积分）",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[3]"
                              },
                              "parentId": 100417,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100417,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961404000,
                          "menuHref": "app.user.companyinfo.integral",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "积分",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7]"
                          },
                          "parentId": 100409,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100486,
                              "itemURL": "coupon/list",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1514972763000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10180,
                              "menuModifiedon": 1515401041000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*用户详情（优惠券）",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[4]"
                              },
                              "parentId": 100416,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100416,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961388000,
                          "menuHref": "app.user.companyinfo.coupon",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "优惠券",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7]"
                          },
                          "parentId": 100409,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100485,
                              "itemURL": "company/bank/record",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "companyBankAccount",
                              "menuCreatedon": 1514972700000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10201,
                              "menuModifiedon": 1515401046000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*企业银行账户列表",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[5]"
                              },
                              "parentId": 100415,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100586,
                              "itemURL": "card/four",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1524229329000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10287,
                              "menuModifiedon": null,
                              "menuSerialNo": 2,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "解绑银行卡",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[5]"
                              },
                              "parentId": 100415,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100587,
                              "itemURL": "card/bind/company",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1524229351000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10290,
                              "menuModifiedon": null,
                              "menuSerialNo": 3,
                              "menuStatus": true,
                              "menuType": 1,
                              "menuVisibility": false,
                              "name": "绑定银行卡",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[5]"
                              },
                              "parentId": 100415,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100415,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961375000,
                          "menuHref": "app.user.companyinfo.bankCard",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "银行账户",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7]"
                          },
                          "parentId": 100409,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100484,
                              "itemURL": "company/card/summary",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "companyDealTotal",
                              "menuCreatedon": 1514972547000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10203,
                              "menuModifiedon": 1515401054000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*企业用户卡摘要",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[6]"
                              },
                              "parentId": 100414,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100483,
                              "itemURL": "dealing/list",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "companyDealList",
                              "menuCreatedon": 1514972490000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10200,
                              "menuModifiedon": 1515401062000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*查询用户交易记录",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[6]"
                              },
                              "parentId": 100414,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100414,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961361000,
                          "menuHref": "app.user.companyinfo.tradingRecord",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "交易记录",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7]"
                          },
                          "parentId": 100409,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100482,
                              "itemURL": "assignment/detail",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "companyTransferApplyInfo",
                              "menuCreatedon": 1514972423000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10199,
                              "menuModifiedon": 1515401072000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*查询转让申请详情",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[7]"
                              },
                              "parentId": 100413,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100413,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961347000,
                          "menuHref": "app.user.companyinfo.transferInfo",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "转让详情",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7]"
                          },
                          "parentId": 100409,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100481,
                              "itemURL": "assignment",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "companyTransferApply",
                              "menuCreatedon": 1514972359000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10198,
                              "menuModifiedon": 1515401081000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*查询转让申请",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[8]"
                              },
                              "parentId": 100412,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100412,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961334000,
                          "menuHref": "app.user.companyinfo.transferList",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "转让申请",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7]"
                          },
                          "parentId": 100409,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100480,
                              "itemURL": "company/assets",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "companyAsset",
                              "menuCreatedon": 1514972242000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10197,
                              "menuModifiedon": 1515401086000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*查询资产信息",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[9]"
                              },
                              "parentId": 100411,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100411,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961319000,
                          "menuHref": "app.user.companyinfo.personAsset",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "资产明细",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7]"
                          },
                          "parentId": 100409,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [],
                          "id": 100410,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1514961304000,
                          "menuHref": "app.user.companyinfo.index",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": null,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "基础信息",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7]"
                          },
                          "parentId": 100409,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100628,
                              "itemURL": "lazyout/list",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "companyEntrust",
                              "menuCreatedon": 1529501282000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10302,
                              "menuModifiedon": 1529501406000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*退出委托申请列表",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[11]"
                              },
                              "parentId": 100627,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100627,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1529501238000,
                          "menuHref": "app.user.companyinfo.entrust",
                          "menuIconclass": "",
                          "menuItemId": 0,
                          "menuModifiedon": 1529501402000,
                          "menuSerialNo": 1,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "退出委托申请",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7]"
                          },
                          "parentId": 100409,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        },
                        {
                          "childrens": [
                            {
                              "childrens": [],
                              "id": 100569,
                              "itemURL": "baofoo/fastpay/orderno",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1518579260000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10272,
                              "menuModifiedon": null,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "宝付快捷订单查询",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[12]"
                              },
                              "parentId": 100529,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100568,
                              "itemURL": "b2c/orderno",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1518579249000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10273,
                              "menuModifiedon": null,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "网银B2C订单查询",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[12]"
                              },
                              "parentId": 100529,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100530,
                              "itemURL": "balance/accounts",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userRemainAccountInfo",
                              "menuCreatedon": 1516253932000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10282,
                              "menuModifiedon": 1521439439000,
                              "menuSerialNo": 1,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*用户详情-余额账户",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[12]"
                              },
                              "parentId": 100529,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100531,
                              "itemURL": "balance/info",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "userRemainAccountTable",
                              "menuCreatedon": 1516254044000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10281,
                              "menuModifiedon": 1521439476000,
                              "menuSerialNo": 2,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "*用户余额账户摘要",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[12]"
                              },
                              "parentId": 100529,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100578,
                              "itemURL": "finance/balance/accounts",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "otherBalance",
                              "menuCreatedon": 1521438928000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10283,
                              "menuModifiedon": null,
                              "menuSerialNo": 5,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "第三方余额明细",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[12]"
                              },
                              "parentId": 100529,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100581,
                              "itemURL": "finance/balance/recharge/status",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1521620487000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10284,
                              "menuModifiedon": null,
                              "menuSerialNo": 6,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "充值状态查询",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[12]"
                              },
                              "parentId": 100529,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100582,
                              "itemURL": "finance/balance/drawcash/status",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "",
                              "menuCreatedon": 1521620504000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10285,
                              "menuModifiedon": null,
                              "menuSerialNo": 7,
                              "menuStatus": true,
                              "menuType": 1,
                              "menuVisibility": false,
                              "name": "提现状态查询",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[12]"
                              },
                              "parentId": 100529,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            },
                            {
                              "childrens": [],
                              "id": 100592,
                              "itemURL": "balance/dayRechargeMoney",
                              "leaf": true,
                              "level": 6,
                              "menuAuthLevel": 3,
                              "menuCode": "companyRechargeMoney",
                              "menuCreatedon": 1525328168000,
                              "menuHref": "",
                              "menuIconclass": "",
                              "menuItemId": 10293,
                              "menuModifiedon": null,
                              "menuSerialNo": 8,
                              "menuStatus": true,
                              "menuType": 3,
                              "menuVisibility": false,
                              "name": "修改在途",
                              "parent": {
                                "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7].childrens[12]"
                              },
                              "parentId": 100529,
                              "root": {
                                "$ref": "$.datas.result"
                              }
                            }
                          ],
                          "id": 100529,
                          "itemURL": "",
                          "leaf": true,
                          "level": 5,
                          "menuAuthLevel": 3,
                          "menuCode": "",
                          "menuCreatedon": 1516253859000,
                          "menuHref": "app.user.companyinfo.remainAccount",
                          "menuIconclass": "",
                          "menuItemId": 2,
                          "menuModifiedon": 1516253911000,
                          "menuSerialNo": 5,
                          "menuStatus": true,
                          "menuType": 1,
                          "menuVisibility": false,
                          "name": "余额账户",
                          "parent": {
                            "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5].childrens[7]"
                          },
                          "parentId": 100409,
                          "root": {
                            "$ref": "$.datas.result"
                          }
                        }
                      ],
                      "id": 100409,
                      "itemURL": "",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514961239000,
                      "menuHref": "app.user.companyinfo",
                      "menuIconclass": "",
                      "menuItemId": 0,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "企业用户详情",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5]"
                      },
                      "parentId": 100202,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100590,
                      "itemURL": "user/status",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "companyCancellationUser",
                      "menuCreatedon": 1524797665000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10292,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "注销用户",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[2].childrens[5]"
                      },
                      "parentId": 100202,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100202,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1505875918000,
                  "menuHref": "app.user.company",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": 1506424152000,
                  "menuSerialNo": 2,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "企业用户",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[2]"
                  },
                  "parentId": 100200,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                }
              ],
              "id": 100200,
              "itemURL": "",
              "leaf": true,
              "level": 2,
              "menuAuthLevel": 3,
              "menuCode": "",
              "menuCreatedon": 1505875726000,
              "menuHref": "app.user",
              "menuIconclass": "person",
              "menuItemId": 2,
              "menuModifiedon": 1514539242000,
              "menuSerialNo": 1,
              "menuStatus": true,
              "menuType": 1,
              "menuVisibility": false,
              "name": "用户管理",
              "parent": {
                "$ref": "$.datas.result.childrens[0]"
              },
              "parentId": 100198,
              "root": {
                "$ref": "$.datas.result"
              },
              "isSingle": 1
            },
            {
              "childrens": [
                {
                  "childrens": [],
                  "id": 100600,
                  "itemURL": "custom/reports",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "exportTable_1",
                  "menuCreatedon": 1526565660000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10296,
                  "menuModifiedon": 1526565675000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "导出level_1",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[3]"
                  },
                  "parentId": 100599,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                },
                {
                  "childrens": [],
                  "id": 100601,
                  "itemURL": "custom/reports",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "exportTable_2",
                  "menuCreatedon": 1526565726000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10296,
                  "menuModifiedon": null,
                  "menuSerialNo": 2,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "导出level_2",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[3]"
                  },
                  "parentId": 100599,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                },
                {
                  "childrens": [],
                  "id": 100602,
                  "itemURL": "custom/reports",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "exportTable_3",
                  "menuCreatedon": 1526565760000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10296,
                  "menuModifiedon": 1527479318000,
                  "menuSerialNo": 3,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "导出level_3",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[3]"
                  },
                  "parentId": 100599,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                },
                {
                  "childrens": [],
                  "id": 100603,
                  "itemURL": "custom/reports",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "exportTable_4",
                  "menuCreatedon": 1526565786000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10296,
                  "menuModifiedon": null,
                  "menuSerialNo": 4,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "导出level_4",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[3]"
                  },
                  "parentId": 100599,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                },
                {
                  "childrens": [],
                  "id": 100604,
                  "itemURL": "custom/reports",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "exportTable_5",
                  "menuCreatedon": 1526565826000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10296,
                  "menuModifiedon": 1526566053000,
                  "menuSerialNo": 5,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "导出level_5",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[3]"
                  },
                  "parentId": 100599,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                },
                {
                  "childrens": [],
                  "id": 100605,
                  "itemURL": "custom/reports",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "exportTable_6",
                  "menuCreatedon": 1526565858000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10296,
                  "menuModifiedon": 1526566060000,
                  "menuSerialNo": 6,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "导出level_6",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[3]"
                  },
                  "parentId": 100599,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                },
                {
                  "childrens": [],
                  "id": 100606,
                  "itemURL": "custom/reports",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "exportTable_7",
                  "menuCreatedon": 1526565892000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10296,
                  "menuModifiedon": 1526566067000,
                  "menuSerialNo": 7,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "导出level_7",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[3]"
                  },
                  "parentId": 100599,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                },
                {
                  "childrens": [],
                  "id": 100607,
                  "itemURL": "custom/reports",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "exportTable_8",
                  "menuCreatedon": 1526565924000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10296,
                  "menuModifiedon": 1526566075000,
                  "menuSerialNo": 8,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "导出level_8",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[3]"
                  },
                  "parentId": 100599,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                },
                {
                  "childrens": [],
                  "id": 100608,
                  "itemURL": "custom/reports",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "exportTable_9",
                  "menuCreatedon": 1526565963000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10296,
                  "menuModifiedon": 1526566085000,
                  "menuSerialNo": 9,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "导出level_9",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[3]"
                  },
                  "parentId": 100599,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                },
                {
                  "childrens": [],
                  "id": 100609,
                  "itemURL": "custom/reports",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "exportTable_10",
                  "menuCreatedon": 1526566006000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10296,
                  "menuModifiedon": 1526566094000,
                  "menuSerialNo": 10,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "导出level_10",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[3]"
                  },
                  "parentId": 100599,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                },
                {
                  "childrens": [],
                  "id": 100624,
                  "itemURL": "custom/report",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "exportTable",
                  "menuCreatedon": 1527474733000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10297,
                  "menuModifiedon": 1527479309000,
                  "menuSerialNo": 11,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "导出执行",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[3]"
                  },
                  "parentId": 100599,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                }
              ],
              "id": 100599,
              "itemURL": "",
              "leaf": true,
              "level": 2,
              "menuAuthLevel": 2,
              "menuCode": "",
              "menuCreatedon": 1526565511000,
              "menuHref": "app.table",
              "menuIconclass": "ios-list",
              "menuItemId": 0,
              "menuModifiedon": null,
              "menuSerialNo": 1,
              "menuStatus": true,
              "menuType": 1,
              "menuVisibility": false,
              "name": "自定义报表导出",
              "parent": {
                "$ref": "$.datas.result.childrens[0]"
              },
              "parentId": 100198,
              "root": {
                "$ref": "$.datas.result"
              },
              "isSingle": 2
            },
            {
              "childrens": [
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100212,
                      "itemURL": "order/detail",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1505878244000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10113,
                      "menuModifiedon": 1526565340000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询订单列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[4].childrens[0]"
                      },
                      "parentId": 100596,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100596,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1526565302000,
                  "menuHref": "app.order.orderManage",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": null,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "订单列表",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[4]"
                  },
                  "parentId": 100203,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100598,
                      "itemURL": "balance/exception/order",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1526565451000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10301,
                      "menuModifiedon": 1526610566000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询异常订单列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[4].childrens[1]"
                      },
                      "parentId": 100597,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100597,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1526565393000,
                  "menuHref": "app.order.orderAbnormal",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": null,
                  "menuSerialNo": 2,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "异常订单管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[4]"
                  },
                  "parentId": 100203,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                }
              ],
              "id": 100203,
              "itemURL": "",
              "leaf": true,
              "level": 2,
              "menuAuthLevel": 2,
              "menuCode": "",
              "menuCreatedon": 1505876009000,
              "menuHref": "0",
              "menuIconclass": "clipboard",
              "menuItemId": 2,
              "menuModifiedon": 1526565232000,
              "menuSerialNo": 2,
              "menuStatus": true,
              "menuType": 1,
              "menuVisibility": false,
              "name": "订单管理",
              "parent": {
                "$ref": "$.datas.result.childrens[0]"
              },
              "parentId": 100198,
              "root": {
                "$ref": "$.datas.result"
              },
              "isSingle": 1
            },
            {
              "childrens": [
                {
                  "childrens": [],
                  "id": 100304,
                  "itemURL": "balance/detaillist",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1514526029000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10147,
                  "menuModifiedon": 1515401125000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "*查询交易流水",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[5]"
                  },
                  "parentId": 100301,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                }
              ],
              "id": 100301,
              "itemURL": "",
              "leaf": true,
              "level": 2,
              "menuAuthLevel": 3,
              "menuCode": "",
              "menuCreatedon": 1514525657000,
              "menuHref": "app.transRecord",
              "menuIconclass": "android-list",
              "menuItemId": 2,
              "menuModifiedon": 1514526152000,
              "menuSerialNo": 3,
              "menuStatus": true,
              "menuType": 1,
              "menuVisibility": false,
              "name": "交易流水",
              "parent": {
                "$ref": "$.datas.result.childrens[0]"
              },
              "parentId": 100198,
              "root": {
                "$ref": "$.datas.result"
              },
              "isSingle": 2
            },
            {
              "childrens": [
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100564,
                      "itemURL": "label/stytle",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1518535411000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10277,
                      "menuModifiedon": 1518582306000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "活动标签样式新增",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[0]"
                      },
                      "parentId": 100558,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100563,
                      "itemURL": "label/stytle",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1518535397000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10271,
                      "menuModifiedon": 1518575315000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "标签样式列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[0]"
                      },
                      "parentId": 100558,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100558,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1518535230000,
                  "menuHref": "app.operate.tagStyle",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": null,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 2,
                  "menuVisibility": false,
                  "name": "标签样式管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100562,
                      "itemURL": "label",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1518535369000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10276,
                      "menuModifiedon": 1518582289000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "活动标签下架",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[1]"
                      },
                      "parentId": 100557,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100561,
                      "itemURL": "label",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1518535349000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10275,
                      "menuModifiedon": 1518582283000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "活动标签新增",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[1]"
                      },
                      "parentId": 100557,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100560,
                      "itemURL": "label",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1518535303000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10274,
                      "menuModifiedon": 1518581884000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "活动标签修改",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[1]"
                      },
                      "parentId": 100557,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100559,
                      "itemURL": "label",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1518535282000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10270,
                      "menuModifiedon": 1518574782000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "活动列表管理",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[1]"
                      },
                      "parentId": 100557,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100557,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1518535202000,
                  "menuHref": "app.operate.actTag",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": 1518535245000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "活动标签管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [],
                  "id": 100540,
                  "itemURL": "information/sn",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1517429153000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10136,
                  "menuModifiedon": null,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "运营管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100331,
                      "itemURL": "risk/questionnaire",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1514535784000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10155,
                      "menuModifiedon": 1515401168000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*根据id查询风险测评问卷列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[3]"
                      },
                      "parentId": 100326,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100330,
                      "itemURL": "risk/questionnaire",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "editQuestionnaire",
                      "menuCreatedon": 1514535671000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10153,
                      "menuModifiedon": 1515401135000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*修改风险测评问卷",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[3]"
                      },
                      "parentId": 100326,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100326,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1514534218000,
                  "menuHref": "app.operate.editRisk",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": 1514978175000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 2,
                  "menuVisibility": false,
                  "name": "修改风险测评问卷页",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100329,
                      "itemURL": "risk/questionnaire",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "addQuestionnaire",
                      "menuCreatedon": 1514535643000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10152,
                      "menuModifiedon": 1515401173000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*新增风险测评问卷",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[4]"
                      },
                      "parentId": 100325,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100325,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1514534144000,
                  "menuHref": "app.operate.addRisk",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": 1514978186000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 2,
                  "menuVisibility": false,
                  "name": "新增风险测评问卷页",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100492,
                      "itemURL": "helpcenter",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1514978949000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10140,
                      "menuModifiedon": 1515401182000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询帮助中心问题",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[5]"
                      },
                      "parentId": 100293,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100295,
                      "itemURL": "helpcenter",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "editHelpQuestion",
                      "menuCreatedon": 1514473550000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10143,
                      "menuModifiedon": 1514979268000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "修改帮助中心问题",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[5]"
                      },
                      "parentId": 100293,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100294,
                      "itemURL": "helpcenter",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "addHelpQuestion",
                      "menuCreatedon": 1514473530000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10142,
                      "menuModifiedon": 1514979545000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "新增帮助中心问题",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[5]"
                      },
                      "parentId": 100293,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100293,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1514473480000,
                  "menuHref": "app.operate.addQues",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": 1514978192000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 2,
                  "menuVisibility": false,
                  "name": "帮助中心新增/编辑",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100292,
                      "itemURL": "helpcenter",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "deleteHelpQuestion",
                      "menuCreatedon": 1514473410000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10144,
                      "menuModifiedon": 1514978248000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "删除帮助中心问题",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[6]"
                      },
                      "parentId": 100224,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100291,
                      "itemURL": "helpcenter/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1514473306000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10139,
                      "menuModifiedon": 1515401188000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询帮助中心问题列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[6]"
                      },
                      "parentId": 100224,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100224,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1507712021000,
                  "menuHref": "app.operate.helpManage",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": 1514961770000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "帮助中心管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100542,
                      "itemURL": "adposition/sn",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "AndSn",
                      "menuCreatedon": 1517485985000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10120,
                      "menuModifiedon": 1517486016000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "修改广告位置权重",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[7]"
                      },
                      "parentId": 100206,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100300,
                      "itemURL": "adposition",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1514473939000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10118,
                      "menuModifiedon": 1515401193000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询广告位",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[7]"
                      },
                      "parentId": 100206,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100299,
                      "itemURL": "adposition/status",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "operateAd",
                      "menuCreatedon": 1514473919000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10117,
                      "menuModifiedon": 1514979743000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "发布/下架广告位",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[7]"
                      },
                      "parentId": 100206,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100298,
                      "itemURL": "adposition",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "deleteAd",
                      "menuCreatedon": 1514473886000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10116,
                      "menuModifiedon": 1514979795000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "删除广告位",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[7]"
                      },
                      "parentId": 100206,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100297,
                      "itemURL": "adposition",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "editAd",
                      "menuCreatedon": 1514473871000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10115,
                      "menuModifiedon": 1514979784000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "修改广告位",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[7]"
                      },
                      "parentId": 100206,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100296,
                      "itemURL": "adposition",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "addAd",
                      "menuCreatedon": 1514473853000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10114,
                      "menuModifiedon": 1514979771000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "新增广告位",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[7]"
                      },
                      "parentId": 100206,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100206,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1505876198000,
                  "menuHref": "app.operate.adManage",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": 1505876245000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "广告位管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100308,
                      "itemURL": "channel",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514531815000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10124,
                      "menuModifiedon": 1515401197000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询渠道",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[8]"
                      },
                      "parentId": 100207,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100307,
                      "itemURL": "channel",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "deleteDitch",
                      "menuCreatedon": 1514531510000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10123,
                      "menuModifiedon": 1514980353000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "删除渠道",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[8]"
                      },
                      "parentId": 100207,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100306,
                      "itemURL": "channel",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "editDitch",
                      "menuCreatedon": 1514531376000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10122,
                      "menuModifiedon": 1514980400000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "修改渠道",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[8]"
                      },
                      "parentId": 100207,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100305,
                      "itemURL": "channel",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "addDitch",
                      "menuCreatedon": 1514531363000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10121,
                      "menuModifiedon": 1514980387000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "新增渠道",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[8]"
                      },
                      "parentId": 100207,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100207,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1505876238000,
                  "menuHref": "app.operate.ditch",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": 1505876249000,
                  "menuSerialNo": 2,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "渠道管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100312,
                      "itemURL": "advice",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514531941000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10129,
                      "menuModifiedon": 1515401202000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询通知",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[9]"
                      },
                      "parentId": 100208,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100311,
                      "itemURL": "advice",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "deleteInform",
                      "menuCreatedon": 1514531925000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10128,
                      "menuModifiedon": 1514980456000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "删除通知",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[9]"
                      },
                      "parentId": 100208,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100310,
                      "itemURL": "advice",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "editInform",
                      "menuCreatedon": 1514531915000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10127,
                      "menuModifiedon": 1514980446000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "修改通知",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[9]"
                      },
                      "parentId": 100208,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100309,
                      "itemURL": "advice",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "addInform",
                      "menuCreatedon": 1514531903000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10126,
                      "menuModifiedon": 1514980437000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "新增通知",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[9]"
                      },
                      "parentId": 100208,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100208,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1505876316000,
                  "menuHref": "app.operate.inform",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": null,
                  "menuSerialNo": 3,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "通知管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100541,
                      "itemURL": "information/sn",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1517429260000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10136,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "修改信息权重",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[10]"
                      },
                      "parentId": 100209,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100317,
                      "itemURL": "information/status",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "operateMessage",
                      "menuCreatedon": 1514532155000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10134,
                      "menuModifiedon": 1514980520000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "发布/下架信息",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[10]"
                      },
                      "parentId": 100209,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100316,
                      "itemURL": "information",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514532128000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10135,
                      "menuModifiedon": 1515401209000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": " *查询信息",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[10]"
                      },
                      "parentId": 100209,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100315,
                      "itemURL": "information",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "deleteMessage",
                      "menuCreatedon": 1514532097000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10133,
                      "menuModifiedon": 1514980507000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "删除信息",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[10]"
                      },
                      "parentId": 100209,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100314,
                      "itemURL": "information",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "editMessage",
                      "menuCreatedon": 1514532081000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10132,
                      "menuModifiedon": 1514980499000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "修改信息",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[10]"
                      },
                      "parentId": 100209,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100313,
                      "itemURL": "information",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "addMessage",
                      "menuCreatedon": 1514532004000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10131,
                      "menuModifiedon": 1514980488000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "新增信息",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[10]"
                      },
                      "parentId": 100209,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100209,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1505876382000,
                  "menuHref": "app.operate.message",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": null,
                  "menuSerialNo": 4,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "信息管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100318,
                      "itemURL": "transfeedback",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514532935000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10138,
                      "menuModifiedon": 1515401215000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询用户意见反馈",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[11]"
                      },
                      "parentId": 100210,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100210,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1505876553000,
                  "menuHref": "app.operate.opinion",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": 1505876930000,
                  "menuSerialNo": 5,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "意见反馈管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100322,
                      "itemURL": "bankinfo",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "addBank",
                      "menuCreatedon": 1514533446000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10088,
                      "menuModifiedon": 1514980567000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "新增银行信息",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[12]"
                      },
                      "parentId": 100211,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100321,
                      "itemURL": "bankinfo/status",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "editBankState",
                      "menuCreatedon": 1514533421000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10091,
                      "menuModifiedon": 1514980621000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "修改银行信息状态",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[12]"
                      },
                      "parentId": 100211,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100320,
                      "itemURL": "bankinfo",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "editBank",
                      "menuCreatedon": 1514533394000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10089,
                      "menuModifiedon": 1514980578000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "修改银行信息",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[12]"
                      },
                      "parentId": 100211,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100319,
                      "itemURL": "bankinfo/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514533368000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10090,
                      "menuModifiedon": 1515401221000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询银行信息列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[12]"
                      },
                      "parentId": 100211,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100211,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1505876629000,
                  "menuHref": "app.operate.bank",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": null,
                  "menuSerialNo": 6,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "银行信息管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100328,
                      "itemURL": "risk/questionnaire/status",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "editQuestionnaireState",
                      "menuCreatedon": 1514535519000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10156,
                      "menuModifiedon": 1514980712000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "修改风险测评问卷状态",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[13]"
                      },
                      "parentId": 100255,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100327,
                      "itemURL": "risk/questionnaire/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1514535499000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10154,
                      "menuModifiedon": 1515401227000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "*查询风险测评问卷列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[13]"
                      },
                      "parentId": 100255,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100255,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1511243005000,
                  "menuHref": "app.operate.risk",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": null,
                  "menuSerialNo": 7,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "风险测评问卷",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100335,
                      "itemURL": "risk/rating",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "deleteRiskLevel",
                      "menuCreatedon": 1514535971000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10151,
                      "menuModifiedon": 1514982041000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "删除风险测评等级",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[14]"
                      },
                      "parentId": 100256,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100334,
                      "itemURL": "risk/rating/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1514535962000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10150,
                      "menuModifiedon": 1515401234000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询风险测评等级列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[14]"
                      },
                      "parentId": 100256,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100333,
                      "itemURL": "risk/rating",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "editRiskLevel",
                      "menuCreatedon": 1514535945000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10149,
                      "menuModifiedon": 1514982025000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "修改风险测评等级",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[14]"
                      },
                      "parentId": 100256,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100332,
                      "itemURL": "risk/rating",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "addRiskLevel",
                      "menuCreatedon": 1514535915000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10148,
                      "menuModifiedon": 1514982016000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "新增风险测评等级",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[14]"
                      },
                      "parentId": 100256,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100256,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1511243041000,
                  "menuHref": "app.operate.riskLevel",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": null,
                  "menuSerialNo": 8,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "风险测评等级",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100336,
                      "itemURL": "message/sms",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1514536298000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10157,
                      "menuModifiedon": 1515401241000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询用户短信消息",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[15]"
                      },
                      "parentId": 100265,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100265,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1514376420000,
                  "menuHref": "app.operate.smsLog",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": null,
                  "menuSerialNo": 10,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "短信日志",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100524,
                      "itemURL": "integral/exchange/record",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1516168659000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10250,
                      "menuModifiedon": 1516170143000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*积分列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[16]"
                      },
                      "parentId": 100523,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100525,
                      "itemURL": "integral/exchange/record/{recordId}",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1516170240000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10251,
                      "menuModifiedon": null,
                      "menuSerialNo": 2,
                      "menuStatus": true,
                      "menuType": 2,
                      "menuVisibility": false,
                      "name": "受理",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[6].childrens[16]"
                      },
                      "parentId": 100523,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100523,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1516168575000,
                  "menuHref": "app.operate.integral",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": 1516168615000,
                  "menuSerialNo": 11,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "积分兑换",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[6]"
                  },
                  "parentId": 100205,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                }
              ],
              "id": 100205,
              "itemURL": "",
              "leaf": true,
              "level": 2,
              "menuAuthLevel": 2,
              "menuCode": "",
              "menuCreatedon": 1505876167000,
              "menuHref": "0",
              "menuIconclass": "android-desktop",
              "menuItemId": 2,
              "menuModifiedon": 1511938444000,
              "menuSerialNo": 4,
              "menuStatus": true,
              "menuType": 1,
              "menuVisibility": false,
              "name": "运营管理",
              "parent": {
                "$ref": "$.datas.result.childrens[0]"
              },
              "parentId": 100198,
              "root": {
                "$ref": "$.datas.result"
              },
              "isSingle": 1
            },
            {
              "childrens": [
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100280,
                      "itemURL": "app/version",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514468045000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10099,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "修改版本信息",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[7].childrens[0]"
                      },
                      "parentId": 100215,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100279,
                      "itemURL": "app/version",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514468006000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10098,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "新增版本信息",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[7].childrens[0]"
                      },
                      "parentId": 100215,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100278,
                      "itemURL": "app/version/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514467929000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10100,
                      "menuModifiedon": 1515401247000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询版本控制列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[7].childrens[0]"
                      },
                      "parentId": 100215,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100215,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1506328916000,
                  "menuHref": "app.mobile.version",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": 1514468254000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "版本管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[7]"
                  },
                  "parentId": 100214,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100285,
                      "itemURL": "app/icon/resourceversionno",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1514468455000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10105,
                      "menuModifiedon": 1515401263000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*查询图标控制资源版本号",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[7].childrens[1]"
                      },
                      "parentId": 100221,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100284,
                      "itemURL": "app/icon",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1514468314000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10103,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "删除图标资源",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[7].childrens[1]"
                      },
                      "parentId": 100221,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100283,
                      "itemURL": "app/icon",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514468235000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10102,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "修改图标资源",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[7].childrens[1]"
                      },
                      "parentId": 100221,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100282,
                      "itemURL": "app/icon",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514468206000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10101,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "新增图标资源",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[7].childrens[1]"
                      },
                      "parentId": 100221,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100281,
                      "itemURL": "app/icon/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514468152000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10104,
                      "menuModifiedon": 1515401355000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*图标管理列表查询",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[7].childrens[1]"
                      },
                      "parentId": 100221,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100221,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1506410596000,
                  "menuHref": "app.mobile.icon",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": 1514468243000,
                  "menuSerialNo": 2,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "图标管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[7]"
                  },
                  "parentId": 100214,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100290,
                      "itemURL": "app/route/resourceversionno",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514470448000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10110,
                      "menuModifiedon": 1515401378000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "*查询路由资源版本号",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[7].childrens[2]"
                      },
                      "parentId": 100217,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100289,
                      "itemURL": "app/route",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514470385000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10108,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "删除路由",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[7].childrens[2]"
                      },
                      "parentId": 100217,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100288,
                      "itemURL": "app/route",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514470371000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10107,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "修改路由",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[7].childrens[2]"
                      },
                      "parentId": 100217,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100287,
                      "itemURL": "app/route",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514470357000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10106,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "新增路由",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[7].childrens[2]"
                      },
                      "parentId": 100217,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100286,
                      "itemURL": "app/route/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1514470334000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10109,
                      "menuModifiedon": 1515401386000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "*路由管理列表查询",
                      "parent": {
                        "$ref": "$.datas.result.childrens[0].childrens[7].childrens[2]"
                      },
                      "parentId": 100217,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100217,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1506410346000,
                  "menuHref": "app.mobile.appRouter",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": 1514468250000,
                  "menuSerialNo": 3,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "路由管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[0].childrens[7]"
                  },
                  "parentId": 100214,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                }
              ],
              "id": 100214,
              "itemURL": "",
              "leaf": true,
              "level": 2,
              "menuAuthLevel": 3,
              "menuCode": "",
              "menuCreatedon": 1506328619000,
              "menuHref": "app.mobile",
              "menuIconclass": "ipad",
              "menuItemId": 2,
              "menuModifiedon": 1506668633000,
              "menuSerialNo": 5,
              "menuStatus": true,
              "menuType": 1,
              "menuVisibility": false,
              "name": "App管理",
              "parent": {
                "$ref": "$.datas.result.childrens[0]"
              },
              "parentId": 100198,
              "root": {
                "$ref": "$.datas.result"
              },
              "isSingle": 1
            }
          ],
          "id": 100198,
          "itemURL": "",
          "leaf": true,
          "level": 1,
          "menuAuthLevel": 3,
          "menuCode": "",
          "menuCreatedon": 1505872785000,
          "menuHref": "",
          "menuIconclass": "/images/app_monitor.png",
          "menuItemId": 2,
          "menuModifiedon": 1505872889000,
          "menuSerialNo": 1,
          "menuStatus": true,
          "menuType": 1,
          "menuVisibility": false,
          "name": "管理后台",
          "parent": {
            "$ref": "$.datas.result"
          },
          "parentId": 2,
          "root": {
            "$ref": "$.datas.result"
          }
        },
        {
          "childrens": [
            {
              "childrens": [
                {
                  "childrens": [],
                  "id": 100556,
                  "itemURL": "automaticlazy",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1518006684000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10262,
                  "menuModifiedon": null,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "接口查询",
                  "parent": {
                    "$ref": "$.datas.result.childrens[2].childrens[0]"
                  },
                  "parentId": 100555,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                }
              ],
              "id": 100555,
              "itemURL": "",
              "leaf": true,
              "level": 2,
              "menuAuthLevel": 3,
              "menuCode": "",
              "menuCreatedon": 1518006655000,
              "menuHref": "fix.interface",
              "menuIconclass": "cloud",
              "menuItemId": 0,
              "menuModifiedon": null,
              "menuSerialNo": 1,
              "menuStatus": true,
              "menuType": 1,
              "menuVisibility": false,
              "name": "接口查询",
              "parent": {
                "$ref": "$.datas.result.childrens[2]"
              },
              "parentId": 10020,
              "root": {
                "$ref": "$.datas.result"
              },
              "isSingle": 2
            },
            {
              "childrens": [
                {
                  "childrens": [],
                  "id": 100551,
                  "itemURL": "redis/data/balance/accountmoney",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "dataCompare",
                  "menuCreatedon": 1517838871000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10258,
                  "menuModifiedon": 1517839871000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "*数据比较",
                  "parent": {
                    "$ref": "$.datas.result.childrens[2].childrens[1]"
                  },
                  "parentId": 100550,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                }
              ],
              "id": 100550,
              "itemURL": "",
              "leaf": true,
              "level": 2,
              "menuAuthLevel": 3,
              "menuCode": "",
              "menuCreatedon": 1517838714000,
              "menuHref": "fix.amount",
              "menuIconclass": "cloud",
              "menuItemId": 0,
              "menuModifiedon": null,
              "menuSerialNo": 1,
              "menuStatus": true,
              "menuType": 1,
              "menuVisibility": false,
              "name": "数据比较",
              "parent": {
                "$ref": "$.datas.result.childrens[2]"
              },
              "parentId": 10020,
              "root": {
                "$ref": "$.datas.result"
              },
              "isSingle": 2
            },
            {
              "childrens": [
                {
                  "childrens": [],
                  "id": 100545,
                  "itemURL": "common/export",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1517653391000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10255,
                  "menuModifiedon": 1517653598000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "导出sql查询",
                  "parent": {
                    "$ref": "$.datas.result.childrens[2].childrens[2]"
                  },
                  "parentId": 100371,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                },
                {
                  "childrens": [],
                  "id": 100372,
                  "itemURL": "common/select",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1514628037000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10253,
                  "menuModifiedon": 1517550716000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "查询sql语句",
                  "parent": {
                    "$ref": "$.datas.result.childrens[2].childrens[2]"
                  },
                  "parentId": 100371,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                }
              ],
              "id": 100371,
              "itemURL": "",
              "leaf": true,
              "level": 2,
              "menuAuthLevel": 3,
              "menuCode": "",
              "menuCreatedon": 1514628009000,
              "menuHref": "fix.tools",
              "menuIconclass": "hammer",
              "menuItemId": 0,
              "menuModifiedon": null,
              "menuSerialNo": 1,
              "menuStatus": true,
              "menuType": 1,
              "menuVisibility": false,
              "name": "系统工具",
              "parent": {
                "$ref": "$.datas.result.childrens[2]"
              },
              "parentId": 10020,
              "root": {
                "$ref": "$.datas.result"
              },
              "isSingle": 2
            },
            {
              "childrens": [
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100234,
                      "itemURL": "auth/itempck/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1507887667000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10067,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "用户组列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[0]"
                      },
                      "parentId": 100227,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100232,
                      "itemURL": "auth/post/itempck",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1507795854000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10077,
                      "menuModifiedon": 1507798022000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "设置岗位关联",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[0]"
                      },
                      "parentId": 100227,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100231,
                      "itemURL": "auth/post",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1507795826000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10076,
                      "menuModifiedon": 1507797959000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "删除岗位及其功能组",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[0]"
                      },
                      "parentId": 100227,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100230,
                      "itemURL": "auth/post",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1507795813000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10075,
                      "menuModifiedon": 1507797907000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "修改岗位名称",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[0]"
                      },
                      "parentId": 100227,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100229,
                      "itemURL": "auth/post",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1507795805000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10074,
                      "menuModifiedon": 1507797862000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "指定部门的岗位列表查询",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[0]"
                      },
                      "parentId": 100227,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100228,
                      "itemURL": "auth/post",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1507795278000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10073,
                      "menuModifiedon": 1507795578000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 1,
                      "menuVisibility": false,
                      "name": "新增岗位",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[0]"
                      },
                      "parentId": 100227,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 100233,
                      "itemURL": "auth/post/itempck",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1507879536000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10078,
                      "menuModifiedon": 1507879556000,
                      "menuSerialNo": 6,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "指定岗位的关联功能组查询",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[0]"
                      },
                      "parentId": 100227,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100227,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1507795259000,
                  "menuHref": "fix.auth.station",
                  "menuIconclass": "ios-people",
                  "menuItemId": 2,
                  "menuModifiedon": 1507808764000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "岗位管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[2].childrens[3]"
                  },
                  "parentId": 10022,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 10038,
                      "itemURL": "auth/org/tree",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10015,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "组织树查询",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[1]"
                      },
                      "parentId": 10031,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10039,
                      "itemURL": "auth/org/battch",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10018,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 2,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "批量新增组织",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[1]"
                      },
                      "parentId": 10031,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10040,
                      "itemURL": "auth/org",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10020,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 3,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "删除组织",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[1]"
                      },
                      "parentId": 10031,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10041,
                      "itemURL": "auth/org",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10019,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 4,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "修改组织",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[1]"
                      },
                      "parentId": 10031,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10042,
                      "itemURL": "auth/orguser",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10021,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 5,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "更新组织用户",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[1]"
                      },
                      "parentId": 10031,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10043,
                      "itemURL": "auth/user/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10027,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 6,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "用户列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[1]"
                      },
                      "parentId": 10031,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10044,
                      "itemURL": "auth/org/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10014,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 7,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "组织列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[1]"
                      },
                      "parentId": 10031,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10045,
                      "itemURL": "auth/user",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10030,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 8,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "新增用户",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[1]"
                      },
                      "parentId": 10031,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10046,
                      "itemURL": "auth/user",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10037,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 9,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "编辑用户",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[1]"
                      },
                      "parentId": 10031,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10047,
                      "itemURL": "auth/user",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10038,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 10,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "删除用户",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[1]"
                      },
                      "parentId": 10031,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10048,
                      "itemURL": "auth/user/status",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10031,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 11,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "启用/禁用用户",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[1]"
                      },
                      "parentId": 10031,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10049,
                      "itemURL": "auth/user/resetpsw",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10033,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 12,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "重置用户密码",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[1]"
                      },
                      "parentId": 10031,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10050,
                      "itemURL": "auth/user/itempck",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10039,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 14,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "用户组列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[1]"
                      },
                      "parentId": 10031,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10051,
                      "itemURL": "auth/user/itempck",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10040,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 15,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "用户组设置",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[1]"
                      },
                      "parentId": 10031,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 10031,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1449676800000,
                  "menuHref": "fix.auth.user",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": 1449676800000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "用户管理",
                  "parent": {
                    "$ref": "$.datas.result.childrens[2].childrens[3]"
                  },
                  "parentId": 10022,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 10055,
                      "itemURL": "auth/itempck/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10067,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "用户组列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[2]"
                      },
                      "parentId": 10032,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10056,
                      "itemURL": "auth/itempck",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10068,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 2,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "新增用户组",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[2]"
                      },
                      "parentId": 10032,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10057,
                      "itemURL": "auth/itempck",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10069,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 3,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "更新用户组",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[2]"
                      },
                      "parentId": 10032,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10058,
                      "itemURL": "auth/itempck",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10070,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 4,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "删除用户组",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[2]"
                      },
                      "parentId": 10032,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10059,
                      "itemURL": "auth/itempck/user",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10071,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 5,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "用户组的用户列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[2]"
                      },
                      "parentId": 10032,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10060,
                      "itemURL": "auth/itempck/user",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10072,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 6,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "设置用户组的用户",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[2]"
                      },
                      "parentId": 10032,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    },
                    {
                      "childrens": [],
                      "id": 10061,
                      "itemURL": "auth/menu/tenant",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1449676800000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10046,
                      "menuModifiedon": 1449676800000,
                      "menuSerialNo": 7,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "租户菜单树",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[3].childrens[2]"
                      },
                      "parentId": 10032,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 10032,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1449676800000,
                  "menuHref": "fix.auth.userpck",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": 1449676800000,
                  "menuSerialNo": 2,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "权限分配",
                  "parent": {
                    "$ref": "$.datas.result.childrens[2].childrens[3]"
                  },
                  "parentId": 10022,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                }
              ],
              "id": 10022,
              "itemURL": "",
              "leaf": true,
              "level": 2,
              "menuAuthLevel": 2,
              "menuCode": "",
              "menuCreatedon": 1449676800000,
              "menuHref": "app.auth",
              "menuIconclass": "settings",
              "menuItemId": 2,
              "menuModifiedon": 1507794431000,
              "menuSerialNo": 1,
              "menuStatus": true,
              "menuType": 1,
              "menuVisibility": false,
              "name": "帐号权限",
              "parent": {
                "$ref": "$.datas.result.childrens[2]"
              },
              "parentId": 10020,
              "root": {
                "$ref": "$.datas.result"
              },
              "isSingle": 1
            },
            {
              "childrens": [
                {
                  "childrens": [],
                  "id": 100549,
                  "itemURL": "redis/balance/accountmoney",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "editCache",
                  "menuCreatedon": 1517718431000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10256,
                  "menuModifiedon": 1517718465000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "修改用户缓存金额",
                  "parent": {
                    "$ref": "$.datas.result.childrens[2].childrens[4]"
                  },
                  "parentId": 100546,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                },
                {
                  "childrens": [],
                  "id": 100548,
                  "itemURL": "redis/balance/accountmoney",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1517718407000,
                  "menuHref": "",
                  "menuIconclass": "",
                  "menuItemId": 10257,
                  "menuModifiedon": null,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 3,
                  "menuVisibility": false,
                  "name": "*查询用户缓存金额",
                  "parent": {
                    "$ref": "$.datas.result.childrens[2].childrens[4]"
                  },
                  "parentId": 100546,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": false
                }
              ],
              "id": 100546,
              "itemURL": "",
              "leaf": true,
              "level": 2,
              "menuAuthLevel": 3,
              "menuCode": "",
              "menuCreatedon": 1517717905000,
              "menuHref": "fix.cache",
              "menuIconclass": "cloud",
              "menuItemId": 0,
              "menuModifiedon": 1517718177000,
              "menuSerialNo": 2,
              "menuStatus": true,
              "menuType": 1,
              "menuVisibility": false,
              "name": "缓存管理",
              "parent": {
                "$ref": "$.datas.result.childrens[2]"
              },
              "parentId": 10020,
              "root": {
                "$ref": "$.datas.result"
              },
              "isSingle": 2
            },
            {
              "childrens": [
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100516,
                      "itemURL": "message/sms",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 2,
                      "menuCode": "",
                      "menuCreatedon": 1515404985000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10157,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "用户短信消息",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[5].childrens[0]"
                      },
                      "parentId": 100223,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100223,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 2,
                  "menuCode": "",
                  "menuCreatedon": 1506668493000,
                  "menuHref": "fix.collocation.sms",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": 1515405237000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "短信模板",
                  "parent": {
                    "$ref": "$.datas.result.childrens[2].childrens[5]"
                  },
                  "parentId": 100222,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                }
              ],
              "id": 100222,
              "itemURL": "",
              "leaf": true,
              "level": 2,
              "menuAuthLevel": 2,
              "menuCode": "",
              "menuCreatedon": 1506668258000,
              "menuHref": "0",
              "menuIconclass": "ios-settings-strong",
              "menuItemId": 2,
              "menuModifiedon": 1515404916000,
              "menuSerialNo": 2,
              "menuStatus": true,
              "menuType": 1,
              "menuVisibility": false,
              "name": "配置管理",
              "parent": {
                "$ref": "$.datas.result.childrens[2]"
              },
              "parentId": 10020,
              "root": {
                "$ref": "$.datas.result"
              },
              "isSingle": 1
            },
            {
              "childrens": [
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100514,
                      "itemURL": "operationlog/list",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1515404858000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10223,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "操作日志列表",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[6].childrens[0]"
                      },
                      "parentId": 100513,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100513,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1515404658000,
                  "menuHref": "fix.survey.surveyLog",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": 1515404703000,
                  "menuSerialNo": 1,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "操作日志",
                  "parent": {
                    "$ref": "$.datas.result.childrens[2].childrens[6]"
                  },
                  "parentId": 100238,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100519,
                      "itemURL": "openapi/log",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1515475128000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10248,
                      "menuModifiedon": 1515485400000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "系统交互日志",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[6].childrens[1]"
                      },
                      "parentId": 100518,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100518,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1515475105000,
                  "menuHref": "fix.survey.interfaceLog",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": null,
                  "menuSerialNo": 2,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "交互日志",
                  "parent": {
                    "$ref": "$.datas.result.childrens[2].childrens[6]"
                  },
                  "parentId": 100238,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100522,
                      "itemURL": "supbalancedetail/log",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1516021422000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10249,
                      "menuModifiedon": 1516024387000,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "balance日志",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[6].childrens[2]"
                      },
                      "parentId": 100521,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100521,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1516021323000,
                  "menuHref": "fix.survey.balanceLog",
                  "menuIconclass": "",
                  "menuItemId": 2,
                  "menuModifiedon": 1516021386000,
                  "menuSerialNo": 3,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "充值提现日志",
                  "parent": {
                    "$ref": "$.datas.result.childrens[2].childrens[6]"
                  },
                  "parentId": 100238,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                },
                {
                  "childrens": [
                    {
                      "childrens": [],
                      "id": 100576,
                      "itemURL": "financeapi/log",
                      "leaf": true,
                      "level": 4,
                      "menuAuthLevel": 3,
                      "menuCode": "",
                      "menuCreatedon": 1521104801000,
                      "menuHref": "",
                      "menuIconclass": "",
                      "menuItemId": 10280,
                      "menuModifiedon": null,
                      "menuSerialNo": 1,
                      "menuStatus": true,
                      "menuType": 3,
                      "menuVisibility": false,
                      "name": "finance日志",
                      "parent": {
                        "$ref": "$.datas.result.childrens[2].childrens[6].childrens[3]"
                      },
                      "parentId": 100575,
                      "root": {
                        "$ref": "$.datas.result"
                      }
                    }
                  ],
                  "id": 100575,
                  "itemURL": "",
                  "leaf": true,
                  "level": 3,
                  "menuAuthLevel": 3,
                  "menuCode": "",
                  "menuCreatedon": 1521104771000,
                  "menuHref": "fix.survey.financeLog",
                  "menuIconclass": "",
                  "menuItemId": 0,
                  "menuModifiedon": null,
                  "menuSerialNo": 4,
                  "menuStatus": true,
                  "menuType": 1,
                  "menuVisibility": false,
                  "name": "财务交互日志",
                  "parent": {
                    "$ref": "$.datas.result.childrens[2].childrens[6]"
                  },
                  "parentId": 100238,
                  "root": {
                    "$ref": "$.datas.result"
                  },
                  "isSingle": true
                }
              ],
              "id": 100238,
              "itemURL": "",
              "leaf": true,
              "level": 2,
              "menuAuthLevel": 2,
              "menuCode": "",
              "menuCreatedon": 1509674674000,
              "menuHref": "0",
              "menuIconclass": "connection-bars",
              "menuItemId": 2,
              "menuModifiedon": 1515405185000,
              "menuSerialNo": 3,
              "menuStatus": true,
              "menuType": 1,
              "menuVisibility": false,
              "name": "系统监控",
              "parent": {
                "$ref": "$.datas.result.childrens[2]"
              },
              "parentId": 10020,
              "root": {
                "$ref": "$.datas.result"
              },
              "isSingle": 1
            }
          ],
          "id": 10020,
          "itemURL": "",
          "leaf": true,
          "level": 1,
          "menuAuthLevel": 2,
          "menuCode": "",
          "menuCreatedon": 1449676800000,
          "menuHref": "",
          "menuIconclass": "/images/app_setting.png",
          "menuItemId": 2,
          "menuModifiedon": 1505872897000,
          "menuSerialNo": 2,
          "menuStatus": true,
          "menuType": 1,
          "menuVisibility": false,
          "name": "后台设置",
          "parent": {
            "$ref": "$.datas.result"
          },
          "parentId": 2,
          "root": {
            "$ref": "$.datas.result"
          }
        },
      ]
    }
  }
})
