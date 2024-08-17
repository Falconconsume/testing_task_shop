import {FC, ReactNode} from 'react';

interface ITitleProps {
    children: ReactNode;
}

const Title: FC<ITitleProps> = ({children}) => {
    return (
        <h5 className='text-3xl font-semibold text-gray-700'>
            {children}
        </h5>
    );
};

export default Title;