'use client'

import { useEffect, useState } from "react";
import HeroBanner from "../components/HeroBanner"
import ProductCard from "../components/ProductCard"
import Wrapper from "../components/Wrapper"

import { API_URL, STRAPI_API_TOKEN } from "../utils/urls"

async function fetchDataFromApi(props) {
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + STRAPI_API_TOKEN,
    }
  }

  const res = await fetch(`${API_URL}/api/products?populate=*`, options, { cache: 'force-cache' })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default function Page() {
  useEffect(() => {

    const getAll = async () => {
      const profileData = await fetchDataFromApi();
      console.log(profileData);

    };

    const result = getAll(); // run it, run it
  }, [result]);

  return (
    <>
      <HeroBanner></HeroBanner>
      <Wrapper>

        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">Its AAVARAN Bitches</div>
          <div className="text-md md:text-xl">Covering Stories Uncovering the World</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14
            px-5 md:px-0">

        </div>
      </Wrapper>
      <div>{result}</div>
    </>
  )
}


