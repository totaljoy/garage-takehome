import { useState } from "react";
import axios from "axios";
import jsPDF from 'jspdf';

const Home = () => {
    const [listing, setListing] = useState('')
    const [listingInfo, setListingInfo] = useState({})

    const getListingInfo = async (listing) => {
        const listingID = {
            id: listing.split('').splice((listing.length - 36), 36).join('')
        }

        try {
            const result = await axios.post('https://garage-backend.onrender.com/getListing', listingID)
            setListingInfo(result.data.result.listing)
            console.log(listingInfo)
        } catch(err) {
            console.log(err)
        }
    }

    const generatePDF = async () => {
        const doc = new jsPDF()
        doc.setFontSize(20)
        // doc.text(`Invoice:`)
        doc.text('Date: August 20, 2024', 20, 40);

        // const logoData = 
        //     'data:image/png;base64,PHN2ZyB3aWR0aD0iMjc5IiBoZWlnaHQ9IjI3OSIgdmlld0JveD0iMCAwIDI3OSAyNzkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNzkiIGhlaWdodD0iMjc5IiByeD0iMTM5LjUiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8zODhfMikiLz4KPHBhdGggZD0iTTEzOC40IDIxM0MxMjUuNiAyMTMgMTEzLjkzMyAyMTEuNTMzIDEwMy40IDIwOC42QzkzIDIwNS41MzMgODQgMjAxIDc2LjQgMTk1QzY4LjkzMzMgMTg5IDYzLjEzMzMgMTgxLjQ2NyA1OSAxNzIuNEM1NSAxNjMuMiA1MyAxNTIuNCA1MyAxNDBDNTMgMTI5LjMzMyA1NS4yIDExOS42IDU5LjYgMTEwLjhDNjQuMTMzMyAxMDEuODY3IDcwLjQ2NjcgOTQuMTMzMyA3OC42IDg3LjZDODYuNzMzMyA4MS4wNjY3IDk2LjQgNzYgMTA3LjYgNzIuNEMxMTguOTMzIDY4LjggMTMxLjQgNjcgMTQ1IDY3QzE1Ni4wNjcgNjcgMTY2LjA2NyA2OC4xMzMzIDE3NSA3MC40QzE4My45MzMgNzIuNjY2NyAxOTEuOCA3NS41MzMzIDE5OC42IDc5QzIwNS40IDgyLjMzMzMgMjExIDg1Ljg2NjcgMjE1LjQgODkuNkwxODkuOCAxMThDMTg2LjMzMyAxMTUuNiAxODIuNCAxMTMuMzMzIDE3OCAxMTEuMkMxNzMuNiAxMDkuMDY3IDE2OC42IDEwNy4zMzMgMTYzIDEwNkMxNTcuNTMzIDEwNC41MzMgMTUxLjMzMyAxMDMuOCAxNDQuNCAxMDMuOEMxMzcuODY3IDEwMy44IDEzMS44IDEwNC43MzMgMTI2LjIgMTA2LjZDMTIwLjYgMTA4LjMzMyAxMTUuNzMzIDExMC44IDExMS42IDExNEMxMDcuNDY3IDExNy4yIDEwNC4yIDEyMS4wNjcgMTAxLjggMTI1LjZDOTkuNTMzMyAxMzAgOTguNCAxMzQuOCA5OC40IDE0MEM5OC40IDE0Ny4yIDk5LjYgMTUzLjEzMyAxMDIgMTU3LjhDMTA0LjUzMyAxNjIuNDY3IDEwNy45MzMgMTY2LjEzMyAxMTIuMiAxNjguOEMxMTYuNDY3IDE3MS40NjcgMTIxLjMzMyAxNzMuNCAxMjYuOCAxNzQuNkMxMzIuMjY3IDE3NS42NjcgMTM4IDE3Ni4yIDE0NCAxNzYuMkMxNTAuMjY3IDE3Ni4yIDE1NiAxNzUuNjY3IDE2MS4yIDE3NC42QzE2Ni40IDE3My40IDE3MC44NjcgMTcxLjggMTc0LjYgMTY5LjhDMTc4LjQ2NyAxNjcuOCAxODEuNCAxNjUuMzMzIDE4My40IDE2Mi40QzE4NS41MzMgMTU5LjQ2NyAxODYuNiAxNTYuMiAxODYuNiAxNTIuNlYxNDguMkwxOTIuNCAxNTkuNEgxMzkuOFYxMjkuNEgyMjYuNkMyMjYuNzMzIDEzMS40IDIyNi44NjcgMTM0IDIyNyAxMzcuMkMyMjcuMTMzIDE0MC4yNjcgMjI3LjIgMTQzLjEzMyAyMjcuMiAxNDUuOEMyMjcuMzMzIDE0OC4zMzMgMjI3LjQgMTQ5Ljg2NyAyMjcuNCAxNTAuNEMyMjcuNCAxNjAuOCAyMjUuMjY3IDE2OS45MzMgMjIxIDE3Ny44QzIxNi44NjcgMTg1LjUzMyAyMTAuODY3IDE5MiAyMDMgMTk3LjJDMTk1LjI2NyAyMDIuNCAxODUuOTMzIDIwNi4zMzMgMTc1IDIwOUMxNjQuMDY3IDIxMS42NjcgMTUxLjg2NyAyMTMgMTM4LjQgMjEzWiIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8zODhfMiIgeDE9IjE0MCIgeTE9IjIuNzkxNTllLTA2IiB4Mj0iMTQwIiB5Mj0iMjc5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjVCMDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkM2OTAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=='
        // doc.addImage(logoData, 'SVG', 50, 10, 40, 40)

        doc.save('invoice.pdf')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await getListingInfo(listing)
        generatePDF()

    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="link__form">
                <label htmlFor="link" className="link__input-label">Garage Listing</label>
                <input 
                    type="text"
                    value={listing}
                    className="link__input"
                    onChange={(e) => setListing(e.target.value)}
                />
                <button type='submit' className="link__input-submit">Get Invoice</button>
            </form>
        </main>
    )
}

export default Home