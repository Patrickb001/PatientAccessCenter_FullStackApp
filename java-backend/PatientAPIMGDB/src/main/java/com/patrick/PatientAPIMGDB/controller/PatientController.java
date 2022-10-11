package com.patrick.PatientAPIMGDB.controller;

import com.patrick.PatientAPIMGDB.model.Patient;
import com.patrick.PatientAPIMGDB.service.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("api/v1/patients")
@AllArgsConstructor
public class PatientController {

    private final PatientService patientService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<Patient> fetchAllPatients(@RequestParam(value="id", required = false) String id){
        return patientService.getPatients(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(consumes = {"application/json"})
    public Patient addPatient(@Valid @RequestBody Patient patient){
        return patientService.addPatient(patient);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping()
    public Patient updatePatient(@Valid @RequestBody Patient patient){
        return patientService.updatePatient(patient);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping()
    public void deletePatient(@RequestParam(value="id") String value){
        patientService.deletePatient(value);
    }
}
