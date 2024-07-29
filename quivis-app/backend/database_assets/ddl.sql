CREATE TABLE USER_DATA (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    weight INTEGER,
    gender TEXT,
    allergies TEXT,
	claude_api_key TEXT
);

CREATE TABLE MEDICAL_HISTORY (
    medical_history_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    text TEXT,
    FOREIGN KEY (user_id) REFERENCES USER_DATA(user_id)
);

CREATE TABLE ISSUING_DOCTORS_OFFICE (
    issuing_doctors_office_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    street VARCHAR(100) NOT NULL,
    house_number VARCHAR(20) NOT NULL,
    zip VARCHAR(20) NOT NULL,
    city VARCHAR(50) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(100)
);

CREATE TABLE DRUG (
    drug_id SERIAL PRIMARY KEY,
    agent VARCHAR(100) NOT NULL,
    brand VARCHAR(100),
    potency VARCHAR(50),
    form VARCHAR(50),
    unit VARCHAR(20)
);

CREATE TABLE MEDICATION_PLAN (
    medication_plan_id SERIAL PRIMARY KEY,
    patient_id INTEGER NOT NULL,
    drug_id INTEGER NOT NULL,
    issued_by INTEGER NOT NULL,
    issue_date DATE NOT NULL,
    time_morning FLOAT,
    time_noon FLOAT,
    time_evening FLOAT,
    time_night FLOAT,
    time_other TEXT,
    indications TEXT,
    reason TEXT,
	print_date DATE
    FOREIGN KEY (patient_id) REFERENCES USER_DATA(user_id),
    FOREIGN KEY (drug_id) REFERENCES DRUG(drug_id),
    FOREIGN KEY (issued_by) REFERENCES ISSUING_DOCTORS_OFFICE(issuing_doctors_office_id)
);
