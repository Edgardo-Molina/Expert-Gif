import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'


export const GifApp = () => {

    const [categories, setCategories] = useState([''])

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory))return
        setCategories([newCategory ,...categories])
        // setCategories(cat => [...cat, 'Sonic'])
    }

  return (
    <>
        <h1>Gif App</h1>

        {/* <AddCategory setCategories={setCategories} /> */}
        <AddCategory onAddCategory={onAddCategory} />

        
            {
                categories.map(category => 
                        <GifGrid key={category} category={category} />
                    )
            }
    </>
  )
}
