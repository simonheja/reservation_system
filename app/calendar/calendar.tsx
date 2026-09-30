'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type valuesPiece = Date | null;
type values = valuesPiece | [valuesPiece, valuesPiece];

export default function CalendarGfg() {
    const [value, onChange] = useState<values>(new Date());

    return (
        <div>
            <h1>NextJs Calendar - Library</h1>
            <Calendar
                onChange = { onChange }
                value = { value }
            />
        </div>
    );
}
