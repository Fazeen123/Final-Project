import React, { useEffect, useState } from 'react'
import './SearchDisplay.css'
import {useDispatch,useSelector} from 'react-redux'
import { AddItem } from './Store/Slices/CartSlice'
import { RemoveItem } from './Store/Slices/CartSlice'

const SearchDisplay = ({searchedList,searchValue}) => {
  const dispatch = useDispatch();

  const AddItemToCart = (item,event)=>{
    dispatch(AddItem(item));
  }
  
  const ShowSelectedItems = useSelector((state) => state.AddItem.items);

  const RemoveFromCart = (index,event) =>{
    dispatch(RemoveFromCart(index));
  }
  console.log("Filtered list in Display :",searchedList)
  console.log("Selected crt items :",ShowSelectedItems)
  
  // const [ShowSelectedItemsId,setShowSelectedItemsId]= useState([])
  
  // const AddIdList = () =>{
  // setShowSelectedItemsId((itemid) => ShowSelectedItems.map((i)=> [...itemid,i.id]))
  // // }
  // console.log("ID list",ShowSelectedItemsId)

  // useEffect(()=>{
  //   AddIdList();
  // },[ShowSelectedItems])
   console.log("Selected to cart fron serach bar",ShowSelectedItems)
  return (
    <div>
        <div className={searchValue ? 'searched-item-list':'hide'}>
        {searchedList && searchedList.length ? 
        searchedList.map((i,index)=> { return <div key={index} className={searchValue ? 'searched-item-containor':"hide"}><div className='item-name-containor'>{i.item}</div> 
                                              <div className='searched-image-containor'><img src={i.loc} alt={i.item} /></div>
                                              <div>{ShowSelectedItems.includes(i)? <button onClick={()=> RemoveFromCart(i.id)} className='remove-btn' >Remove from cart</button> : <button onClick={()=> AddItemToCart(i)} >Add to crt</button>}</div>
                                              </div>}) : searchValue && <div className={searchValue?'searched-item-containor':"hide"}>Doesnt Exist</div>}
        </div>
      
    </div>
  )
}

export default SearchDisplay
