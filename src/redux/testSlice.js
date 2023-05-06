import {createSlice,createAsyncThunk} from'@reduxjs/toolkit'
import axios from "axios"


const initialState={
    value:0,
    data:[],
    categoryData:[],
    OneProducts:{},
}
export const getAllData =createAsyncThunk('x/getalldata',
    
    async ()=>{
       
       const res =await axios.get("http://localhost:8000/sadim/product?limit=4")
       
       return res.data
       
    })

    export const getPageProducts =createAsyncThunk('x/getPageProducts',
    
    async (num)=>{

       const res =await axios.get( `http://localhost:8000/sadim/product?limit=4&page=${num}`)
       return res.data
    })


    export const getAllCategories =createAsyncThunk('x/getAllCategories',
    
    async ()=>{

       const res =await axios.get( `http://localhost:8000/sadim/Category`)
       return res.data.data
    })


    export const getAllProductxCategory  =createAsyncThunk('x/getAllProductxCategory',

    async (id)=>{

        const res =await axios.get( `http://localhost:8000/sadim/product/category/${id}`)
        return res.data
     })
     export const getOneProduct  =createAsyncThunk('x/getOneProduct',

    async (id)=>{

        const res =await axios.get( `http://localhost:8000/sadim/product/${id}`)
        return res.data.data
     })


 const testSlice = createSlice(

{
    name:'test',
    initialState,
    reducers:{
},
extraReducers:{
    [getAllData.pending]:(state,action)=>{},
    [getAllData.fulfilled]:(state,action)=>{
        state.data=action.payload
    },
    [getAllData.rejected]:(state,action)=>{}
,

    [getPageProducts.pending]:(state,action)=>{},
    [getPageProducts.fulfilled]:(state,action)=>{
        state.data=action.payload
    },
    [getPageProducts.rejected]:(state,action)=>{},


    [getAllCategories.pending]:(state,action)=>{},
    [getAllCategories.fulfilled]:(state,action)=>{
        state.categoryData=action.payload
    },
    [getAllCategories.rejected]:(state,action)=>{},



    [getAllProductxCategory.pending]:(state,action)=>{},

    [getAllProductxCategory.fulfilled]:(state,action)=>{
        state.data=action.payload
    },
    [getAllProductxCategory.rejected]:(state,action)=>{},

    [getOneProduct.pending]:(state,action)=>{},

    [getOneProduct.fulfilled]:(state,action)=>{
        state.OneProducts=action.payload
    },
    [getOneProduct.rejected]:(state,action)=>{}







}

}
)

export default testSlice.reducer;