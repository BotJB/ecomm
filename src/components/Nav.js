import React from 'react'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge, { BadgeProps } from '@mui/material/Badge';
import Button from '@mui/material/Button';

const Nav = () => {
  return (
    <div className='bg-[#6E6E6E] text-white flex p-6  '>
        <div className="logo flex-1">
            <h4 className='text-xl flex-1'>Amazon</h4>
        </div>


        <div className='flex-1'>
           <input  className="h-8 rounded " type="text" name="" id="" placeholder='Search for items' />
<SearchTwoToneIcon className='cursor-pointer'>
    <button></button>
    </SearchTwoToneIcon>
        </div>


        <div className='flex-1 flex justify-between'>
        <Button variant='contained' className='bg-[#BAFF39] p-2'>Register</Button>
        <Button variant='contained' className='bg-[#BAFF39] p-2'>Login</Button>
        <Badge   badgeContent={4} color="secondary" className='cursor-pointer'>
      <ShoppingCartIcon  />
</Badge>
        </div>
    
    </div>
  )
}

export default Nav