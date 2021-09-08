import React from 'react';
import '../styles/components/_table.scss';

export const Table = () => (
 <div className="grid grid-cols-1">
    <table className="border-collapse mx-auto">
        <thead>
            <tr>
            <th className="w-1/2 ...">Title</th>
            <th className="w-1/4 ...">Author</th>
            <th className="w-1/4 ...">Views</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td className="">Intro to CSS</td>
            <td>Adam</td>
            <td>858</td>
            </tr>
            <tr>
            <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
            <td>Adam</td>
            <td>112</td>
            </tr>
            <tr>
            <td>Intro to JavaScript</td>
            <td>Chris</td>
            <td>1,280</td>
            </tr>
        </tbody>
    </table>
</div>
  );