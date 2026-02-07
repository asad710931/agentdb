'use client'
import React, { useState } from 'react';
import QRCode from 'react-qr-code';
interface QRCodeProps {
    text: string;
    size?: number;
}

type QRCodeComponent = React.FC<QRCodeProps>;

const QRcode: QRCodeComponent = ({ text, size = 100 }) => {
    return (
        <div>
            <QRCode value={text} size={size} />
        </div>
    );
}

export default QRcode 
