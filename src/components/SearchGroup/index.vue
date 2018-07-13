<template>
    <el-card class="wrapper-option">
        <el-form ref="form" label-width="130px" size="small">
            <el-row :gutter="20" v-if="!searchMore" class="simple-form">
                <el-col :span="6" v-for="(item,index) in data" :key="index" v-if="index<=2 && item.type != 'date'">
                    <el-form-item :label="item.label">
                        <el-input v-if="item.type=='text'" v-model="item.value"></el-input>
                        <el-select v-else-if="item.type=='select'" v-model="item.value" placeholder="请选择">
                            <el-option :value="option.value" v-for="option in item.option" :key="option.id" :label="option.label">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="9" v-for="(item,index) in data" :key="index" v-if="index<=2 && item.type == 'date'">
                    <el-form-item :label="item.label">
                        <el-date-picker v-model="item.value" :type="item.datetype" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="4" :offset="2">
                    <el-button type="text" @click="searchMore=true">高级筛选</el-button>
                    <el-button style="margin-left: 15px;" type="primary" size="small" @click="search">查询</el-button>
                    <el-button style="margin-left: 15px;" size="small">重置</el-button>
                </el-col>
            </el-row>
            <el-row :gutter="20" v-else>
                <el-col :span="6" v-for="(item,index) in data" :key="index" v-if="item.type != 'date'">
                    <el-form-item :label="item.label">
                        <el-input v-if="item.type=='text'" v-model="item.value"></el-input>
                        <el-select v-else-if="item.type=='select'" v-model="item.value" placeholder="请选择">
                            <el-option :value="option.value" v-for="option in item.option" :key="option.id" :label="option.label">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="9" v-for="(item,index) in data" :key="index" v-if="item.type == 'date'">
                    <el-form-item :label="item.label">
                        <el-date-picker v-model="item.value" :type="item.isShort ? 'daterange' : 'datetimerange'" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="4" :offset="20">
                    <el-button type="text" @click="searchMore=false">简单筛选</el-button>
                    <el-button style="margin-left: 15px;" type="primary" size="small" @click="search">查询</el-button>
                    <el-button style="margin-left: 15px;" size="small">重置</el-button>
                </el-col>
            </el-row>
        </el-form>
    </el-card>
</template>
<script>
    import { copy,getTimeStr } from '@/utils'
    export default {
        data() {
            return {
                data: [],
                searchMore: false
            }
        },
        props: ['initData'],
        watch: {
            initData(val) {
                this.resetSearch()
            }
        },
        created() {
            this.resetSearch()
        },
        methods: {
            resetSearch() {
                const data = copy(this.initData)
                this.data = data
            },
            search() {
                this.$emit('search')
            },
            getFormData() {
                let formData = {}
                this.data.forEach(function (item) {
                    if (item.type == "date") {
                        formData[item.key[0]] = getTimeStr(item.value[0], item.isShort)
                        let formTimeStr = item.isShort ? +item.value[1] + 86399000 : +item.value[1];
                        formData[item.key[1]] = +item.value[1] ? getTimeStr(formTimeStr, item.isShort) : ""
                    } else if (item.type == "numberBetween") {
                        item.key.forEach((dataKey, index) => {
                            formData[dataKey] = item.value[index]
                        })
                    } else if (item.type == "select") {
                        formData[item.key] = item.value || 0
                    } else {
                        formData[item.key] = item.value || parseInt(item.value) === 0 ? item.value : ""
                    }
                })
                return formData;
            },
        }
    }
</script>
