import GithubHelper from "@/components/github-helper";
import LongWait from "@/components/longWait";
import { Suspense } from "react";

//server component
export default async function About(){
    return(
        <div>
            <h1>About</h1>

            <p>This is the about page</p>
            <Suspense fallback={<p>Loading...</p>}>
                <LongWait></LongWait>
            </Suspense>
            <GithubHelper />
        </div>
    )
}