import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import React, { Component } from 'react'
import Link from 'next/link'


function Category() {


    const alertName = () => {
        alert(' John Doe ');
    };
    const router = useRouter()


    return (
        <div>
            <h3> This is a dynamic page exmaple </h3>
            <button onClick={alertName}> Example working </button>
        </div>
    );


};


export default Category;
