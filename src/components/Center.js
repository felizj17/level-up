
export default function Center({ center }) {

    return (
        <tr className="center-info">
            <h1>Center Card Comp</h1>

            <td>{center.borough}</td>
            <td>{center.host_organization}</td>
            <td>{center.site_location_address}</td>
            <td>{center.days_open}</td>
            <td>{center.hours}</td>
            <td>{center.language_s}</td>

        </tr>
    )
}