import { useState, useEffect } from 'react';
import emojiList from '../emojiList';
import EmojiContainer from './EmojiContainer';

const Main = () => {
    //console.log(emojiList);
    // useState with using Destructuring
    //const states = useState();
    //const list = states[0];
    // const setList = states[1];

    // useState with using Destructuring
    const [list, setList] = useState(emojiList);
    //console.log(list);
    const [keyword, setKeyword] = useState(""); //setKeyword is a FUNCTION & keyword is a ACTUAL VALUE.

    const typed = (e) => {
        const value = e.target.value; //onKeyUp takes element character by character , e is EVENT OBJECT
        setKeyword(value);
    }

    useEffect(_ => {
        //console.log(`keyword is pressed - ${keyword}`);
        //filter based on Description, category , aliases

        const filterList = emojiList.filter(singleEmoji => { //single ELEMNet hai esiliye BRACKET nikal diya
            
            if (singleEmoji.description.startsWith(keyword)) { //It is a STRING function inJS
                return true;
            }

            if (singleEmoji.category.startsWith(keyword)) {
                return true;
            }

            if (singleEmoji.aliases.some(e => e.startsWith(keyword))) {
                return true;
            }
            if(singleEmoji.emoji === keyword){
                return true;
            }


            return false;
        });

        setList(filterList);


    }, [keyword]);

    return (
        <main>

            <div className="search">
                <input type="text" placeholder="Search for emojee🔍" onKeyUp={typed} />
                {keyword === "" ? false : (<h3>Result for - {keyword}</h3>)}
                
            </div>


            <hr />

            {list.length === 0 ? (
                <h3 className="no-result">Oops, You Don't Have Any Related Emojee 😟!</h3>
            ) : (

                <EmojiContainer list={list} />

            )}


        </main>
    )
}

export default Main;
