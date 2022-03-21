// manipula dados do usuario

import firebase from '../firebase'
import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

const db = getFirestore(firebase)

const coll = collection(db, 'usuarios');

/**
 * Verifica se os dados do usuario são válidos
 * @param {string} login 
 * @param {string} senha 
 * @returns 
 */
export async function logar(login, senha)
{
    let q = query(coll, 
                where('login', '==', login), 
                where('senha', '==', senha)
                );

    let result = await getDocs(q)

    let user;
    
    if (result.empty == false)
    {
        result.forEach(function(item) {
            user = item.data()
        })

        return user;
    } else {
        return false;
    }
}

export function logout()
{

}

export function user()
{

}