<template>
    <div v-cloak>
        <el-container style="height: 500px; border: 1px solid #eee; margin-top: 20px;">
            <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-news"></i> 关于JavaScript的那些事
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">
                                <a href="https://www.jianshu.com/p/3f75e7de05ea" target="_blank">JavaScript的事件执行机制</a>
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <a href="https://www.jianshu.com/p/9fa19e7c8783" target="_blank">面向对象的程序设计</a>
                            </el-menu-item>
                            <el-menu-item index="1-3">
                                <a href="https://www.jianshu.com/p/23180880d3aa" target="_blank">浅谈Vue双向数据绑定的原理</a>
                            </el-menu-item>
                            <el-menu-item index="1-4">
                                <a href="https://www.jianshu.com/p/919ee9c4302d" target="_blank">数据类型值</a>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>深入浅出ES6</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">
                                <a href="https://www.jianshu.com/p/2c8ff58134b0" target="_blank">Set & Map数据结构</a>
                            </el-menu-item>
                            <el-menu-item index="2-2">
                                <a href="https://www.jianshu.com/p/631f9406c4e0" target="_blank">async函数</a>
                            </el-menu-item>
                            <el-menu-item index="2-3">
                                <a href="https://www.jianshu.com/p/6c1b0e2b53c3" target="_blank">模块化</a>
                            </el-menu-item>
                            <el-menu-item index="2-4">
                                <a href="https://www.jianshu.com/p/5b1db8806e80" target="_blank">Promise</a>
                            </el-menu-item>
                            <el-menu-item index="2-5">
                                <a href="https://www.jianshu.com/p/e26def31b2ee" target="_blank">数组的循环</a>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>在项目中掘金</template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">
                                <el-tab-pane><a href="https://www.jianshu.com/p/0f00ad5e8e3b" target="_blank">Vue 2.x + Webpack 4.x的那些事</a></el-tab-pane>
                            </el-menu-item>
                            <el-menu-item index="3-2">
                                <a href="https://www.jianshu.com/p/87d6754f6782" target="_blank">Vue项目中的一些问题</a>
                            </el-menu-item>
                            <el-menu-item index="3-3">
                                <a href="https://www.jianshu.com/p/f8e175403dfb" target="_blank">教你如何使用nvm</a>
                            </el-menu-item>
                            <el-menu-item index="3-4">
                                <a href="https://www.jianshu.com/p/10625eb198be" target="_blank">关于Github</a>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item><a href="https://yufy1314.github.io/">查看</a></el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>
                        <el-popover
                            placement="top-start"
                            title="个人博客"
                            width="200"
                            trigger="hover"
                            content="有问题可以来我的博客, 可以互相学习交流, 喜欢的话走一波关注哦!">
                            <el-button :plain="true" @click="open" slot="reference">苏日俪格</el-button>
                        </el-popover>
                    </span>
                </el-header>
                <el-main>
                    <el-table :data="tableData">
                        <el-table-column prop="date" label="日期" width="200">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="200">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作">
                            <template slot-scope="scope">
                                <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="danger" size="small">
                                    移除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">有问题可以访问博客私信我
                    <a href="https://www.jianshu.com/u/72f239ec5d03" target="_blank">@苏日俪格</a>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            data: {
                date: '2018-08-16',
                name: '苏日俪格',
                address: '北京市西城区西直门外大街凯旋大厦'
            },
            tableData: []
        }
    },
    methods: {
        open() {
            this.$message('想联系我就去我的博客哦^_^');
        },
        open5() {
            this.$notify.info({
                title: '消息',
                message: '欢迎来客访问',
                offset: 80
            });
        },
        deleteRow(index, rows) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                rows.splice(index, 1);
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }
    },
    created() {
        this.open5();
        this.tableData = Array(20).fill(this.data);
    }
}
</script>
<style scoped lang="less">
[v-cloak] {
    display: none;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}

.el-row {
    margin-top: 30px;
    margin-bottom: 20px;
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.grid-content {
    border-radius: 4px;
    min-height: 50px;
    line-height: 50px;
    text-align: center;
}

a {
    text-decoration: none;
}
</style>
