-- Table: public.employee

-- DROP TABLE public.employee;

CREATE TABLE public.employee
(
  
  "firstName" character varying(50),
  "middleName" character varying(50),
  "lastName" character varying(50),
  email character varying(50),
  "phoneNo" character varying(50),
  role_id integer,
  address character varying(100),
  c_id integer,
  id SERIAL NOT NULL ,
  CONSTRAINT employee_pkey PRIMARY KEY (id),
  CONSTRAINT employee_c_id_fkey FOREIGN KEY (c_id)
      REFERENCES public.customer (c_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Trigger: employee_trigger on public.employee

-- DROP TRIGGER employee_trigger ON public.employee;
CREATE OR REPLACE FUNCTION validation()
  RETURNS trigger AS
$func$
BEGIN   
  IF(NEW.email !~ '^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$')
  THEN RAISE EXCEPTION 'INVALID EMAIL';
  END IF;
  IF(NEW."phoneNo" !~ '^0\d{9}|\d{10}$') 
  THEN RAISE EXCEPTION 'INVALID PHONE NUMBER';
  END IF;
  RETURN NEW;
END;
$func$  LANGUAGE plpgsql;

CREATE TRIGGER employee_trigger BEFORE INSERT or UPDATE ON employee
FOR EACH ROW EXECUTE PROCEDURE validation();

ALTER TABLE employee
ADD timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE employee
ADD modify TIMESTAMP DEFAULT CURRENT_TIMESTAMP;create or replace function change_timestamp()
RETURNS TRIGGER AS
$$
begin
new.modify=CURRENT_TIMESTAMP;
return new;
end;
$$
LANGUAGE plpgsql;
CREATE trigger on_update
before update
on employee for each row
EXECUTE PROCEDURE change_timestamp();