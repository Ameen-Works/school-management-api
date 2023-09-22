import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import CardsPageContent from "./TeachersPageContent";
import Footer from "./Footer";

function TeachersList() {
  return (
    <div id="page-top">
      {/* <!-- Page Wrapper -->*/}
      <div id="wrapper">
        {/* <!-- Sidebar -->*/}
        <Sidebar />
        {/* <!-- End of Sidebar -->*/}

        {/* <!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content -->*/}
          <div id="content">
            {/* <!-- Topbar -->*/}
            <Topbar />
            {/* <!-- End of Topbar -->*/}

            {/* <!-- Begin Page Content -->*/}
            <CardsPageContent />
            {/* <!-- /.container-fluid -->*/}
          </div>
          {/* <!-- End of Main Content -->*/}

          {/* <!-- Footer -->*/}
          <Footer />
          {/* <!-- End of Footer -->*/}
        </div>
        {/* <!-- End of Content Wrapper -->*/}
      </div>
      {/* <!-- End of Page Wrapper -->*/}

      {/* <!-- Scroll to Top Button-->*/}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/* <!-- Logout Modal-->*/}
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Bootstrap core JavaScript-->*/}
      <script src="./vendor/jquery/jquery.min.js"></script>
      <script src="./vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

      {/* <!-- Core plugin JavaScript-->*/}
      <script src="./vendor/jquery-easing/jquery.easing.min.js"></script>

      {/* <!-- Custom scripts for all pages-->*/}
      <script src="./js/sb-admin-2.min.js"></script>

      {/* <!-- Page level plugins -->*/}
      <script src="./vendor/chart.js/Chart.min.js"></script>

      {/* <!-- Page level custom scripts -->*/}
      <script src="./js/demo/chart-area-demo.js"></script>
      <script src="./js/demo/chart-pie-demo.js"></script>
    </div>
  );
}

export default TeachersList;
