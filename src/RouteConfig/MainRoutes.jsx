import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from '../screens/menu/Contact'
import Companies from '../screens/menu/Companies'
import Deals from '../screens/menu/Deals'
import Lists from '../screens/menu/Lists'
import Inbox from '../screens/menu/Inbox'
import NOPage from '../screens/menu/NOPage'
import Calls from '../screens/menu/Calls'
import Tasks from '../screens/menu/Tasks'
import Invoices from '../screens/menu/Invoices'
import Payment from '../screens/menu/Payment'
import Dashboard from '../screens/menu/Dashboard'
import App from '../App'

export const MainLayout = () => {
    return (
        <>

            <Routes>
                <Route path='/*' element={<NOPage />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/companies' element={<Companies />} />
                <Route path='/deals' element={<Deals />} />
                <Route path='/lists' element={<Lists />} />
                <Route path='/inbox' element={<Inbox />} />
                <Route path='/calls' element={<Calls />} />
                <Route path='/tasks' element={<Tasks />} />
                <Route path='/invoices' element={<Invoices />} />
                <Route path='/payment' element={<Payment />} />
                <Route index element={<Dashboard />} />
            </Routes>

        </>
    )
}