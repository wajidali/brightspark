using System;
using BrightSparkTask.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace BrightSparkTask.Tests
{
    [TestClass]
    public class CalcControllerTest
    {
        [TestMethod]
        public void TestMethodSum()
        {
            var controller = new CalcController();

            var result = controller.GetSum(1.5, 1.5);

            Assert.AreEqual(3, result.Result);
        }

        [TestMethod]
        public void TestMethodSub()
        {
            var controller = new CalcController();

            var result = controller.GetSub(1.5, 1.5);

            Assert.AreEqual(0, result.Result);
        }

        [TestMethod]
        public void TestMethodMult()
        {
            var controller = new CalcController();

            var result = controller.GetMult(2, 2);

            Assert.AreEqual(4, result.Result);
        }

        [TestMethod]
        public void TestMethodDiv()
        {
            var controller = new CalcController();

            var result = controller.GetDiv(10, 2);

            Assert.AreEqual(5, result.Result);
        }
    }
}
