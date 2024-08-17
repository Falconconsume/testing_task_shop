import React from 'react';

interface Container {
    children: React.ReactNode;
}

const Container: React.FC<Container> = ({ children }) => {
    return (
        <header className="container mx-auto p-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center justify-between">
                    {children}
                </div>
            </div>
        </header>
    );
};

export default Container;