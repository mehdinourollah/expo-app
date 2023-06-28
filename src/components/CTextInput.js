import React from 'react'
import { TextInput } from 'react-native';

const CTextInput = (props) => {
  return (
    <TextInput className="shadow appearance-none border rounded border-slate-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...props}/>
  )
}

export default CTextInput;