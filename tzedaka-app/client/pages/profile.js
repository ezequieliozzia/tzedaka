import Godchild from "@/components/Godchild";
import Godfather from "@/components/Godfather";
import React from "react";
import { currentUser } from '@clerk/nextjs';

export default async function  Profile({user}){
    console.log(user);
    return (
        <>
            <Godfather></Godfather>
            <div className="flex items-center justify-center">
                <Godchild></Godchild>
                {user}
            </div>
        </>
    );
};

export async function getServerSideProps() {
    const user = await currentUser();

    // Pass data to the page via props
    return { props: { user } };
}

