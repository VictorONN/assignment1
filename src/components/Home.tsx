import axios from "axios";
import React, { useState } from "react";
import AppUtil from "../util";


export interface SearchResultsData {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

export interface License {
  name: string;
  url: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

export interface Phonetic {
  text: string;
  audio: string;
  sourceUrl: string;
  license: License;
}


export default function Home() {
  const [searchResults, setSearchResults] = useState({} as SearchResultsData);
  const [search, setSearch] = useState('');

  const utls = new AppUtil();
  
  const fetchData = async (searchTerm: string) => {

    try {
      const resp = await axios("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchTerm, {
        method: 'GET',

      });
      const respText: SearchResultsData =  resp.data;//converting json to interface object
      setSearchResults(respText) // setting state

    } catch (error) {
      console.error("An error occurred " + JSON.stringify(error))
    }

  }


  return <div>

    <h1>This is the Home Page</h1>

    <input onChange={(e) => { setSearch(e.target.value) }} />
    <button onClick={(e) => {
      // e.preventDefault();
      fetchData(search);
    }}>Search</button>

    {
      utls.isObjectEmpty(searchResults) ? <div> no results </div> : <div> {JSON.stringify(searchResults)}</div>
    }
  </div>
    ;
}
