export default function ValasztoView({lista}) {
    return (
        <span>
            <select name="valasz" id="valasz">
                <option value=""></option>
                {lista.map(function (valasz) {
                    return <option value={valasz}>{valasz}</option>
                })}
            </select>
        </span>
    );
}