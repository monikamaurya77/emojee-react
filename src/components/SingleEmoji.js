import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useEffect, useState} from 'react';

const SingleEmoji = ({ singleEmoji }) => {
     const[isCopied, setCopy] = useState(false);

     useEffect(_ => {
        if(isCopied) {
            setTimeout(_ => {
                setCopy(false);
            }, 1600);
        }
     })

    return (
        <CopyToClipboard text={singleEmoji.emoji} onCopy={_ => setCopy(true)}>
        <div className= {`items ${isCopied ? `copied` : ""}`}>
            <p className="emoji">{isCopied ? '✅' : singleEmoji.emoji}</p>
             <p className="description">{singleEmoji.description}</p>
        </div>
        </CopyToClipboard>

    )
}

export default SingleEmoji;