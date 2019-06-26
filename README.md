# Load Testing MSS

Load testing using [k6](https://docs.k6.io/docs/welcome) docker image

# Setup
- install k6 docker image 
```bash
docker pull loadimpact/k6
```
## Add the following record to Postgres DB
- Log onto the terminal for the DB pod
- open postgres `psql`
- connect to db `/connect mobile-security-service`
- Add the record
```SQL
INSERT INTO app(id, app_id, app_name, deleted_at) VALUES ('a2895cc1-28d7-4283-932d-8bcab9e1b566', 'appid.example.com', 'Foobar', NULL);
```

## Set the init endpoint url in the mss-script.js

Change the url address on line 18 mss-script.js

# Running

Will run 20, tests for 2 minutes at a maximum of 5000 requests depending which limit is hit first
```bash
./loadtesting.sh
```