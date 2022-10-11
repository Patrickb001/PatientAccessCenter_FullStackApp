package com.patrick.PatientAPIMGDB.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.index.CompoundIndexes;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Document
@CompoundIndexes({
    @CompoundIndex(name = "name_dob", def = "{'name' : 1, 'DOB': 1}", unique = true)
})
public class Patient {
    @Id
    private String id;

    @NotEmpty
    private String profileImg;

    @NotEmpty
    private String name;


    @NotEmpty
    private String DOB;

    @NotEmpty
    private String weight;
    
    private Gender gender;

    @NotEmpty
    private String diagnosis;

    @NotEmpty
    private String address;

    @NotNull
    private String mobileNumber;

    @NotNull
    private String homeNumber;

    @NotNull
    private String workNumber;

    @NotEmpty
    private String height;

    private LocalDateTime createdAt;
    @NotNull
    private String email;
    @NotNull
    private List<String> comorbidities;

    @NotNull
    private List<String> medications;

    @NotNull
    private List<String> vitalSigns;

    public Patient() {
    }

    public Patient(String profileImg, String name, String DOB, String weight, String height,
                   Gender gender, String diagnosis, String address, String email,
                   String homeNumber, String mobileNumber, String workNumber,
                   List<String> comorbidities, List<String> medications, List<String> vitalSigns) {
        this.profileImg = profileImg;
        this.name = name;
        this.DOB = DOB;
        this.weight = weight;
        this.height = height;
        this.gender = gender;
        this.diagnosis = diagnosis;
        this.address = address;
        this.email = email;
        this.homeNumber = homeNumber;
        this.mobileNumber = mobileNumber;
        this.workNumber = workNumber;
        this.comorbidities = comorbidities;
        this.createdAt = LocalDateTime.now();
        this.medications = medications;
        this.vitalSigns = vitalSigns;
    }

    public String getId(){
        return id;
    }

    public String getWeight(){
        return weight;
    }
}
