
export default function Center({ center }) {

    return (
        <tr className="center-info">

            <td>{center.borough}</td>
            <td>{center.host_organization}</td>
            <td>{center.site_location_address}</td>
            <td>{center.days_open}</td>
            <td>{center.hours}</td>
            <td>{center.language_s}</td>

        </tr>
    )
}