package com.quivis.quivisapp.medicalhistory;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicalHistoryRepository extends JpaRepository<MedicalHistoryEntry, Long> {
}
