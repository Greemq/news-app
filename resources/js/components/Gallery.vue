<template>
    <div class="wrapper">
        <div class="main">
            <div class="card_list" v-if="list.length>0">
                <card v-for="item in list" :item="item" :key="item.id"></card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "./Card";
import client from "../helpers";

export default {
    name: "Gallery",
    components: {Card},
    data() {
        return {
            list:[]
        };
    },
    methods:{
        getList(){
            client.get('/api/list').then(res=>{
                this.list=res.data.list

            })
        }
    },
    mounted(){
        console.log('mounted')
        this.getList()
    }
};
</script>

<style scoped>

</style>