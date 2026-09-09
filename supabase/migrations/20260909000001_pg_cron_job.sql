-- Schedule background engine job
create extension if not exists pg_cron;
create extension if not exists pg_net;

select cron.unschedule('open-autodm-process-jobs')
where exists (
  select 1 from cron.job where jobname = 'open-autodm-process-jobs'
);

select cron.schedule(
  'open-autodm-process-jobs',
  '* * * * *',
  $$
  select net.http_post(
    url := 'https://insta.infiplus.in/api/cron/process-jobs',
    headers := jsonb_build_object('Authorization', 'Bearer a68520d4f08a8497b7bfc183baabc4e2a0cfb149c685ab74'),
    timeout_milliseconds := 55000
  );
  $$
);
