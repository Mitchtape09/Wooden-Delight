import React, { useRef, useState } from 'react';
import {Link} from 'react-router-dom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDLpPaRg9FKPL6PZXZibnRd2Z3CmHska_8",
    authDomain: "javascript-project-3dd44.firebaseapp.com",
    projectId: "javascript-project-3dd44",
    storageBucket: "javascript-project-3dd44.appspot.com",
    messagingSenderId: "95695494689",
    appId: "1:95695494689:web:fd7d510fec5efb8097cd60",
    measurementId: "G-8JR27481GK"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function ChatBot() {

    const [user] = useAuthState(auth);

    return (
        <div className="App">
            <div className='p-3 mb-2 bg-dark text-white'>
                <h1 className='logo'>Wooden Delight</h1>
                <button className='btn btn-outline-success'><Link to={`/products`}>Back to Customer View</Link></button>
                <button className='btn btn-outline-success'><Link to={`/contactus`}>Contact Us</Link></button>
            </div>
            <header>
                <p className='emoji bg-light'>&#128172; &#128526; &#129309;</p>
                <SignOut />
            </header>

            <section>
                {user ? <ChatRoom /> : <SignIn />}
            </section>

        </div>
    );
}

function SignIn() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
    <>
        <button className="sign-in btn btn-outline-success m-3" onClick={signInWithGoogle}>Sign in with Google</button>
        <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
    )

}

function SignOut() {
    return auth.currentUser && (
    <button className="sign-out btn btn-outline-success m-3" onClick={() => auth.signOut()}>Sign Out</button>
    )
}


function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {
        e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
    <>
        <main>

            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

            <span ref={dummy}></span>

        </main>

        <form onSubmit={sendMessage}>

            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

            <button type="submit" disabled={!formValue}>🕊️</button>

        </form>
    </>
    )
}


function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
    <>
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
        </div>
    </>
    )
}


export default ChatBot;