import {useEffect, useState} from "react";
import {IPost} from "./models/IPost";
import {getPosts} from "./services/post.api";
import Post from "./Post";

const Posts = () => {

    let [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value.data));
    }, []);

    return <div>
        {
            // posts.map(value => <Post item={value} key={value.id} />)
            posts.map(value => <Post {...value}  key={value.id}>
                <button>hello</button>
            </Post>)
        }
    </div>
}

export default Posts;