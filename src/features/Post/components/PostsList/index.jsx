import React from 'react';
import { PostItem } from 'features';

const PostsList = ({ posts }) => {
    return (
        <div className="w-full flex justify-center items-center gap-8 my-12 flex-col">
            {
                posts.map(post => <PostItem key={post._id} post={post} />)
            }
        </div>
    )
}

export { PostsList };