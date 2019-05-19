import 'css/common.css'
import './category.css'
import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

// import Foot from '@/components/Foot'
import mixin from 'js/mixin.js'

let app=new Vue({
    el:'#app',
    data:{
        topLists:null,
        topIndex:0,
        subData:[],
        rankData:[],
    },
    created(){
        this.getTopLists()
        this.getSubList(0)
    },
    methods:{
        getTopLists(){
            axios.get(url.topList)
            .then(res=>{
                this.topLists=res.data.lists
            })
        },
        getSubList(index,id){
            this.topIndex=index
            if (index===0) {
                this.getRank()
            }else{
                axios.get(url.subList,{id})
                .then(res=>{
                    this.subData=res.data.data
                })
            }
        },
        getRank(){
            axios.get(url.rank)
                .then(res=>{
                    this.rankData=res.data.data
                })
        },
        toSearch(list){
            location.href=`search.html?keyword=${list.name}&id=${list.id}`
        }
    },
    // components:{
    //     Foot
    // },
    // filters:{
    //     priceFormate(price){
    //         return price+".00"
    //     }
    // },
    mixins:[mixin]
})