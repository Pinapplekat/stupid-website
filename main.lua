local p = get("p")

local test = "Rizzler"

local res = fetch({
    url = "http://127.0.0.1:7999/new",
    method = "POST",
    headers = { ["Content-Type"] = "application/json" }
    body = '{ "name": "' .. test .. '"}'
})

p.set_content(res)