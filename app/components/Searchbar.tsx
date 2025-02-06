import { Input } from '@/components/ui/input'
import React from 'react'

export default function Search(){
  
    return(
        <form>
            <Input
            type='search'
            name='search'
            placeholder='Search...'
            className=' w-[300px] rounded-xl bg-slate-50 text-black'
            />

        </form>
    )
}
