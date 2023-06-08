import React from 'react'

interface ICardProps {
    children: React.ReactNode;
    img: string;
}

export const Card = (props: ICardProps) => {
    const { children, img } = props;

    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={img} />
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}
