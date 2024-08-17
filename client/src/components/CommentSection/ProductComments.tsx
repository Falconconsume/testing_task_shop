import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {IComment} from "@/types/types.ts";


interface ProductCommentsProps {
    productId: string | undefined;
    initialComments: IComment[];
}

const ProductComments: React.FC<ProductCommentsProps> = ({ initialComments }) => {
    const [comments, _setComments] = useState<IComment[]>(initialComments);
    const [newComment, setNewComment] = useState('');


    return (
        <Card className="w-full max-w-md mx-auto mt-6">
            <CardHeader>
                <CardTitle>Product Comments</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-2 mb-4">
                    <Input
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                    />
                    <Button>Add</Button>
                </div>
                <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                    {comments.map((comment, index) => (
                        <div key={comment.id}>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="text-sm text-gray-800">{comment.text}</p>
                                    <p className="text-xs text-gray-500">
                                        {comment.date.toLocaleString()}
                                    </p>
                                </div>
                                <Button
                                    variant="destructive"
                                    size="sm"
                                >
                                    Delete
                                </Button>
                            </div>
                            {index < comments.length - 1 && <Separator className="my-2" />}
                        </div>
                    ))}
                </ScrollArea>
            </CardContent>
        </Card>
    );
};

export default ProductComments;